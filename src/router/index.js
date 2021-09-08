import { createRouter, createWebHistory, useRoute } from "vue-router";
import Home from "../views/Home.vue";
import ArtistDetailsList from "../views/ArtistDetailsList.vue";
import ArtistDetails from "../views/ArtistDetails.vue";
import data from "../assets/shared/data.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/artists/:id",
    name: "ArtistDetailsList",
    component: ArtistDetailsList,
  },
  {
    path: "/artist/:id",
    name: "ArtistDetails",
    component: ArtistDetails,
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to, from) {
      const exists = data.paintings.find(
        (painting) => painting.id === parseInt(to.params.id)
      );
      if (!exists)
        return (
          {
            name: "NotFound",
            // allows keeping the URL while rendering a different page
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash,
          },
          {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () => import("../views/NotFound.vue"),
          }
        );
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
