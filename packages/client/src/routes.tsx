import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
// import ProductType from "./pages/ProductType";

type routeType = {
  path: string;
  sidebar: () => JSX.Element; //TODO: check what it does on the website
  main: (props: any) => JSX.Element;
}

const routes: routeType[] = [
  {
    path: "/",
    sidebar: () => <div>home!</div>,
    main: Home
  },
  {
    path: "/favorites",
    sidebar: () => <div>favorites!</div>,
    main: Favorites
  },
  {
    path: "/about",
    sidebar: () => <div>about!</div>,
    main: About
  },
  {
    path: "/checkout", // TODO: change name of route
    sidebar: () => <div>checkout!</div>,
    main: Checkout
  }
]

export default routes;