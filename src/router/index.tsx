import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import PATH from "./paths";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Home />,
  },
]);

export default router;
