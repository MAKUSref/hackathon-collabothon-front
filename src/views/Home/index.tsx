import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import GlassBox from "../../components/GlassBox/GlassBox";
import Button from "@mui/material/Button";
import Drawer from "../../components/Drawer/Drawer";
import HistoryItem from "../../components/HistoryItem/HistoryItem";
import { Box, Stack, Typography, styled } from "@mui/material";
import logoLSvg from "../../assets/logoL.svg";
import { StyledCCSmall } from "./Home.style";
import ccSmSvg from "../../assets/ccSm.svg";
import mapMyRun from "../../assets/mapy-my-run.png";
import forest from "../../assets/forest.png";
import globalGoals from "../../assets/global-goals.jpg";

const DonateBtn = styled(Button)({
  borderRadius: "40px",
  color: "#fff",
  width: "90%",
  height: "66px",
  border: "1px solid rgba(255, 255, 255, 0.09)",
  background:
    "linear-gradient(89deg, rgba(255, 255, 255, 0.13) 22.27%, rgba(255, 255, 255, 0.28) 88.68%)",
  left: "50%",
  position: "fixed",
  transform: "translateX(-50%)",
  bottom: "20px",
});

const Home = () => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.session.token);

  useEffect(() => {
    if (!token) {
      // navigate("/login");
    }
  }, [navigate, token]);

  return (
    <>
      <Drawer />
      <Stack mt={5}>
        <Stack
          direction="row"
          gap={1}
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ userSelect: "none" }} textAlign="center">
            Your Carbon Credits
          </Typography>
          <img src={ccSmSvg} />
        </Stack>
        <Typography sx={{ userSelect: "none" }} variant="h1" textAlign="center">
          23<StyledCCSmall>.88</StyledCCSmall>
        </Typography>
        <Box sx={{ userSelect: "none" }} mb={4} textAlign="center">
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
      <DonateBtn
        sx={{
          justifyContent: "start",
          paddingLeft: "25px",
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        Donate{" "}
        <span style={{ fontWeight: 700, marginLeft: "8px" }}>
          {" "}
          Global Goals
        </span>
        <Box
          sx={{
            width: "50px",
            display: "flex",
            height: "100%",
            borderRadius: "100px",
            backgroundColor: "#fff",
            alignItems: "center",
            marginLeft: "auto",
            justifyContent: "center",
          }}
        >
          <img src={globalGoals} />
        </Box>
      </DonateBtn>
    </>
  );
};

export default Home;
