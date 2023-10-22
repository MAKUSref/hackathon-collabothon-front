import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import GlassBox from "../../components/GlassBox/GlassBox";
import Button from "@mui/material/Button";
import Drawer from "../../components/Drawer/Drawer";
import HistoryItem from "../../components/HistoryItem/HistoryItem";
import { Box, IconButton, Stack, Typography, styled } from "@mui/material";
import logoLSvg from "../../assets/logoL.svg";
import { StyledCCSmall } from "./Home.style";
import ccSmSvg from "../../assets/ccSm.svg";
import globalGoals from "../../assets/global-goals.jpg";
import PATHS from "../../router/paths";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import { useGetCCQuery, useGetHistoryQuery } from "../../redux/api/carbbynApi";
import { StyledContainer } from "../../components/BgContainer/BgContainer.style";
import Grid from "@mui/material/Grid";
import { achievements } from "../Achievement/achievements";
import { setFirstProfitAchievement } from "../../redux/session/sessionSlice";
import HistoryItemSkeleton from "../../components/HistoryItemSkeleton";

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
  textTransform: "capitalize",
});

function getInt(num?: number) {
  if (!num) return "0";

  return String(parseInt(String(num)));
}

function getFloat(num?: number) {
  if (!num) return "00";
  if (Number.isInteger(num)) return "00";

  return String(num).split(".")[1].substring(0, 2);
}

const Home = () => {
  const { data: cc } = useGetCCQuery();
  const { data: resHistory, isLoading, refetch } = useGetHistoryQuery();
  const isFirstDonateAchievement = useAppSelector(
    (state) => state.session.isFirstDonateAchievement
  );
  const isFirstProfitAchievement = useAppSelector(
    (state) => state.session.isFirstProfitAchievement
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.session.token);

  const reversedHistory = useMemo(
    () => resHistory?.history.slice().reverse(),
    [resHistory]
  );

  useEffect(() => {
    if (cc && cc > 0) {
      dispatch(setFirstProfitAchievement());
    }
  });

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <StyledContainer>
      <Drawer />
      <Stack mt={3}>
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
          {getInt(cc)}
          <StyledCCSmall>. {getFloat(cc)}</StyledCCSmall>
        </Typography>
        <Box sx={{ userSelect: "none" }} mb={4} textAlign="center">
          <img src={logoLSvg} />
        </Box>
      </Stack>
      <GlassBox>
        {isLoading && (
          <>
            <HistoryItemSkeleton />
            <HistoryItemSkeleton />
          </>
        )}
        {!resHistory?.history.length && !isLoading && (
          <div>No transaction history yet</div>
        )}
        {reversedHistory?.map((historyItem, i) => (
          <HistoryItem
            key={i}
            amount={historyItem.cc}
            appLogo={historyItem.linkedApp.logo}
            appTitle={historyItem.linkedApp.name}
            action="Flora"
          />
        ))}
      </GlassBox>
      <Grid
        container
        alignItems="center"
        marginTop={8}
        padding="8px 8px 0 15px"
      >
        <Grid sx={{ fontSize: "12px" }} item xs={10}>
          Achievements
        </Grid>
        <Grid textAlign="right" item xs={2}>
          <IconButton>
            <WidgetsRoundedIcon sx={{ width: "12px" }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container alignItems="center" gap="15px">
        {isFirstDonateAchievement && (
          <Grid key={`achievement-${achievements[0].id}`} item xs={2}>
            <IconButton
              onClick={() =>
                navigate(`${PATHS.ACHIEVEMENT}/${achievements[0].id}`)
              }
              sx={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <img src={achievements[0].thumbnail} />
            </IconButton>
          </Grid>
        )}
        {isFirstProfitAchievement && (
          <Grid key={`achievement-${achievements[1].id}`} item xs={2}>
            <IconButton
              onClick={() =>
                navigate(`${PATHS.ACHIEVEMENT}/${achievements[1].id}`)
              }
              sx={{ paddingTop: 0, paddingBottom: 0 }}
            >
              <img src={achievements[1].thumbnail} />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <DonateBtn
        onClick={() => {
          navigate(PATHS.GLOBAL_GOALS);
        }}
        sx={{
          justifyContent: "start",
          paddingLeft: "25px",
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        Donate
        <span style={{ fontWeight: 700, marginLeft: "8px" }}>Global Goals</span>
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
    </StyledContainer>
  );
};

export default Home;
