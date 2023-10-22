import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../views/Home";
import PATH from "./paths";
import Login from "../views/Login";
import BgContainer from "../components/BgContainer";
import Welcome from "../views/Welcome";
import GlobalGoals from "../views/GlobalGoals";
import { Typography } from "@mui/material";
import GlobalGoal from "../views/GlobalGoal";
import Achievement from "../views/Achievement";

const router = createBrowserRouter([
  {
    path: "/",
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
        path: PATH.WELCOME,
        element: <Welcome />,
      },
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
      {
        path: PATH.GLOBAL_GOALS,
        element: <GlobalGoals />,
      },
      {
        path: PATH.GLOBAL_GOAL,
        element: <GlobalGoal />,
      },
      {
        path: PATH.ACHIEVEMENTS,
        element: <Achievement />,
      },
      {
        path: "*",
        element: (
          <Typography textAlign="center" variant="h4">
            404 not found
          </Typography>
        ),
      },
    ],
  },
]);

export default router;
