import { Box, Stack } from "@mui/material";
import NavigationTopBar from "../../components/NavigationTopBar";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PATHS from "../../router/paths";

const LinkedApps = () => {
  return (
    <Box className="page-with-navigation">
      <NavigationTopBar
        label={`Supporting Apps`}
        backIcon={<ArrowBackRoundedIcon />}
        navigateTo={PATHS.HOME}
      />
      <Stack mx={2}>
        
      </Stack>
    </Box>
  );
}

export default LinkedApps;
