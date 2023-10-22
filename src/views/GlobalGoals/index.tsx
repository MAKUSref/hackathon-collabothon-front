import NavigationTopBar from "../../components/NavigationTopBar";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PATHS from "../../router/paths";
import { Box, Grid, Stack, Typography } from "@mui/material";
import "./GlobalGoals.style.css";
import { globalGoals } from "./goals";
import WAVES_IMG from "../../assets/waves.png";
import GOALS_LOGO from "../../assets/goals-logo.svg";
import { useNavigate } from "react-router-dom";

const GlobalGoals = () => {
  const navigate = useNavigate();

  return (
    <Box className="page-with-navigation">
      <NavigationTopBar
        label="Global Goals"
        backIcon={<ArrowBackRoundedIcon />}
        navigateTo={PATHS.HOME}
      />
      <Box className="background-waves" />
      <img className="waves-img" role="presentation" src={WAVES_IMG} />
      <Box className="goals-logo">
        <img className="goals-logo-img" role="presentation" src={GOALS_LOGO} />
      </Box>

      <Grid container className="global-goals-content">
        {globalGoals.map(({ id, goal, color, icon }, i) => (
          <Grid item xs={6} key={i}>
            <Box
              m="7px"
              bgcolor={color}
              className="global-goal"
              onClick={() => navigate(`${PATHS.GLOBAL_GOALS}/${id}`)}
            >
              <Stack direction="row">
                <Typography fontSize="14px" fontWeight={600}>
                  {id}.
                </Typography>
                <Typography
                  pl={1}
                  fontSize="14px"
                  textTransform="uppercase"
                  fontWeight={600}
                >
                  {goal}
                </Typography>
              </Stack>
              <img src={icon} height="40px" />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box className="global-goals-content"></Box>
    </Box>
  );
};

export default GlobalGoals;
