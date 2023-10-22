import { Box, Grid, Stack, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import NavigationTopBar from "../../components/NavigationTopBar";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PATHS from "../../router/paths";
import { globalGoals } from "../GlobalGoals/goals";
import money from "../../assets/money.png";
import "./style.css";
import {
  useGetCCBySolutionQuery,
  useGetCCQuery,
  useSpentCCMutation,
} from "../../redux/api/carbbynApi";
import { useAppDispatch } from "../../redux/hooks";
import { setFirstDonateAchievement } from "../../redux/session/sessionSlice";
import ccSmSvg from "../../assets/ccSm.svg";

const GlobalGoal = () => {
  const { id } = useParams();
  const goal = globalGoals[Number(id || 1) - 1];
  const { data: getCCBySolutionResponse } = useGetCCBySolutionQuery(goal.type);
  const [spentCC] = useSpentCCMutation();
  const { data: userCC } = useGetCCQuery();
  const dispatch = useAppDispatch();

  const handleSpentCC = () => {
    if (!goal) return;

    spentCC(goal.type)
      .unwrap()
      .then(() => dispatch(setFirstDonateAchievement()))
      .catch(console.log);
  };

  return (
    <Box
      className="page-with-navigation"
      sx={{
        background: `linear-gradient(180deg, #1d0093 0%, ${goal.color} 27.14%)`,
      }}
      height="100vh"
    >
      <NavigationTopBar
        label={`${goal.id}. ${goal.goal}`}
        backIcon={<ArrowBackRoundedIcon />}
        navigateTo={PATHS.GLOBAL_GOALS}
      />

      <Stack paddingTop={3} justifyContent="space-between" height="100%" px={2}>
        <Stack paddingTop={2} sx={{ zIndex: 1 }} className="charity-card">
          <Grid container>
            <Grid item xs={6}>
              <Box m={2}>
                <Typography>Donated by now:</Typography>
                <Typography my={2} variant="h3">
                  {getCCBySolutionResponse
                    ? Math.floor(getCCBySolutionResponse?.cc * 100 * 8.2) / 100
                    : 0}{" "}
                  $
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography m={2} variant="h4">
                {goal.id}. {goal.goal}
              </Typography>
            </Grid>
          </Grid>
          <Box padding={2}>
            <Typography
              sx={{ fontSize: "12px", fontWeight: 700, marginBottom: "6px" }}
            >
              Priority
            </Typography>
            <Typography sx={{ fontWeight: 400 }}>
              Enabling real and full social integration of persons with
              disabilities and psychological, social, functional and economic
              support for their families
            </Typography>
          </Box>
          <Stack direction="row" justifyContent="center" mt="55px">
            <Typography>1</Typography>
            <img
              style={{ marginLeft: "6px", marginRight: "2px"}}
              width="15px"
              height="15px"
              src={ccSmSvg}
            />
            <Typography ml="2px">= 8.20$</Typography>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <Button
              sx={{
                borderRadius: "15px",
                borderColor: "rgba(255, 255, 255, 0.33)",
                color: "#fff",
                width: "355px",
                padding: "15px",
                "&:hover": {
                  borderColor: "rgba(255, 255, 255, 0.33)",
                },
              }}
              disabled={userCC === 0}
              variant="outlined"
              onClick={handleSpentCC}
            >
              Donate
            </Button>
          </Box>
        </Stack>
        <Box sx={{ position: "absolute", left: 0, bottom: "170px" }}>
          <img src={money} />
        </Box>
        <Box>
          <img src={goal.icon} />
        </Box>
      </Stack>
    </Box>
  );
};

export default GlobalGoal;
