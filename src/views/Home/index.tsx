import { useEffect } from "react";
// import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import GlassBox from "../../components/GlassBox/GlassBox";
import Drawer from "../../components/Drawer/Drawer";
import { Box, Stack, Typography } from "@mui/material";
import logoLSvg from "../../assets/logoL.svg";
import { StyledCCSmall } from "./Home.style";
import ccSmSvg from "../../assets/ccSm.svg";

const Home = () => {
  // const navigate = useNavigate();
  const token = useAppSelector((state) => state.session.token);

  useEffect(() => {
    if (!token) {
      // navigate("/login");
    }
  }, [navigate, token]);

  return (
    <>
      <Drawer />
      <Stack mt={15}>
        <Stack
          direction="row"
          gap={1}
          alignItems="center"
          justifyContent="center"
        >
          <Typography textAlign="center">Your Carbon Credits</Typography>
          <img src={ccSmSvg} />
        </Stack>
        <Typography variant="h1" textAlign="center">
          23<StyledCCSmall>.88</StyledCCSmall>
        </Typography>
        <Box mb={4} textAlign="center">
          <img src={logoLSvg} />
        </Box>
      </Stack>
      <GlassBox>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        error ratione sapiente minima placeat aspernatur labore tempora rem
        repellat iure, vel quas molestias quod excepturi dolorem, autem esse
        cupiditate tempore. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Temporibus error ratione sapiente minima placeat aspernatur labore
        tempora rem repellat iure, vel quas molestias quod excepturi dolorem,
        autem esse cupiditate tempore.
      </GlassBox>
    </>
  );
};

export default Home;
