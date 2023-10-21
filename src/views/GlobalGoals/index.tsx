import NavigationTopBar from "../../components/NavigationTopBar";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PATHS from "../../router/paths";
import { Box, Grid, Stack, Typography } from "@mui/material";
import "./GlobalGoals.style.css";
import { globalGoals } from "./goals";

const GlobalGoals = () => {
  return (
    <Box className="page-with-navigation">
      <NavigationTopBar
        label="Global Goals"
        backIcon={<ArrowBackRoundedIcon />}
        navigateTo={PATHS.HOME}
      />
      <Grid container className="global-goals-content">
        {globalGoals.map(({ id, goal, color, icon }) => (
          <Grid item xs={6}>
            <Box m="5px" bgcolor={color} className="global-goal">
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
