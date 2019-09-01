import ShopItem from "../components/shopItem";
import Shop from "../components/shop";
import About from "../components/about";
import Home from "../components/home";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/shop",
    component: Shop,
    routes: [
      {
        path: "/shop/:id",
        component: ShopItem
      }
      ,
      {
        path: "/shop/:id/(:obj)",
        component: ShopItem
      }
    ]
  },
  {
    path: "/*",
    component: Home
  }
];

export default routes;
