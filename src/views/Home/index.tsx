import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import GlassBox from "../../components/GlassBox/GlassBox";
import Drawer from "../../components/Drawer/Drawer";
import HistoryItem from "../../components/HistoryItem/HistoryItem";
import { Box, Stack, Typography } from "@mui/material";
import logoLSvg from "../../assets/logoL.svg";
import { StyledCCSmall } from "./Home.style";
import ccSmSvg from "../../assets/ccSm.svg";
import mapMyRun from "../../assets/mapy-my-run.png";
import forest from "../../assets/forest.png";

const Home = () => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.session.token);

  useEffect(() => {
    if (!token) {
      navigate("/login");
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
        <HistoryItem
          amount={0.2}
          appLogo={forest}
          appTitle="Forest"
          action="Flora"
        />
        <HistoryItem
          amount={0.3}
          appLogo={mapMyRun}
          appTitle="Map my run"
          action="Transport"
        />
      </GlassBox>
    </>
  );
};

export default Home;
