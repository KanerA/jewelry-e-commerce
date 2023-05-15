import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import ProductType from "./pages/ProductType";
import RINGS from './products/Rings';
import BRACELETS from "./products/bracelets";
import EARRINGS from "./products/earrings";
import NECKLACES from "./products/necklaces";

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
  },
  {
    path: "/rings",
    main: () => <ProductType productType={"Rings"} products={RINGS} />,
    sidebar: () => <div>Rings!</div>
  },
  {
    path: "/bracelets",
    main: () => <ProductType productType={"Bracelets"} products={BRACELETS} />,
    sidebar: () => <div>Bracelets!</div>
  },
  {
    path: "/earrings",
    main: () => <ProductType productType={"Earrings"} products={EARRINGS} />,
    sidebar: () => <div>Earrings!</div>
  },
  {
    path: "/necklaces",
    main: () => <ProductType productType={"Necklaces"} products={NECKLACES} />,
    sidebar: () => <div>Necklaces!</div>
  }
]

export default routes;