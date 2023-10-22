import { Box, Grid, IconButton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import NavigationTopBar from "../../components/NavigationTopBar";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PATHS from "../../router/paths";
import { achievements } from "./achievements";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

const Achievement = () => {
  const { id } = useParams();

  const achievement = achievements[Number(id || 1) - 1];

  return (
    <Box className="page-with-navigation" height="100vh">
      <NavigationTopBar
        label="Achievements"
        backIcon={<ArrowBackRoundedIcon />}
        navigateTo={PATHS.HOME}
      />

      <Grid container gap="34px" justifyContent="center" textAlign="center">
        <Grid xs={12} marginTop="60px" item>
          <img src={achievement.icon} width="174px" height="182px" />
        </Grid>

        <Grid sx={{ fontSize: "24px", fontWeight: 600 }} xs={5} item>
          {achievement.title}
        </Grid>
        <Grid sx={{ fontSize: "12px", fontWeight: 400 }} xs={10} item>
          {achievement.description}
        </Grid>
        <Stack
          sx={{
            fontWeight: 400,
            fontSize: "12px",
            position: "absolute",
            bottom: 0,
          }}
        >
          <Box>
            <IconButton
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.19)",
                marginBottom: "12px",
              }}
            >
              <EmojiEventsOutlinedIcon />
            </IconButton>
          </Box>
          Unlocked 2 October 2023
        </Stack>
      </Grid>
    </Box>
  );
};

export default Achievement;
