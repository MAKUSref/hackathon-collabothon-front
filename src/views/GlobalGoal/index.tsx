import { Box, Grid, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import NavigationTopBar from "../../components/NavigationTopBar";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PATHS from "../../router/paths";
import { globalGoals } from "../GlobalGoals/goals";
import "./style.css";

const GlobalGoal = () => {
  const { id } = useParams();

  const goal = globalGoals[Number(id || 1) - 1];

  return (
    <Box className="page-with-navigation" bgcolor={goal.color} height="100vh">
      <NavigationTopBar
        label={`${goal.id}. ${goal.goal}`}
        backIcon={<ArrowBackRoundedIcon />}
        navigateTo={PATHS.GLOBAL_GOALS}
      />

      <Stack justifyContent="space-between" height="100%" px={2}>
        <Stack className="charity-card">
          <Grid container>
            <Grid item xs={5}>
              <Box m={2}>
                <Typography>Donated by now:</Typography>
                <Typography my={2} variant="h3">
                  65 $
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Typography m={2} variant="h4">
                {goal.id}. {goal.goal}
              </Typography>
            </Grid>
          </Grid>
        </Stack>
        <Box>
          <img src={goal.icon} />
        </Box>
      </Stack>
    </Box>
  );
};

export default GlobalGoal;
