import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../views/Home";
import PATH from "./paths";
import Login from "../views/Login";
import BgContainer from "../components/BgContainer";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: (
      <BgContainer>
        <Outlet />
      </BgContainer>
    ),
    children: [
      {
        path: PATH.HOME,
        element: <Home />,
      },
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
    ],
  },
]);

export default router;
