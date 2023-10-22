import { Box, Stack } from "@mui/material";
import NavigationTopBar from "../../components/NavigationTopBar";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PATHS from "../../router/paths";
import {
  useGetHistoryQuery,
  useGetLinkedAppsQuery,
} from "../../redux/api/carbbynApi";
import LinkedAppItem from "../../components/LinkedAppItem";

const LinkedApps = () => {
  const { data: linkedAppsRes } = useGetLinkedAppsQuery();
  const { data: historyRes } = useGetHistoryQuery();

  return (
    <Box className="page-with-navigation">
      <NavigationTopBar
        label={`Supporting Apps`}
        backIcon={<ArrowBackRoundedIcon />}
        navigateTo={PATHS.HOME}
      />
      <Stack mx={3} mt={2}>
        {linkedAppsRes?.map((item) => {
          const amount =
            historyRes?.history.reduce((sum, currEl) => {
              if (currEl.linkedApp.name === item.name) {
                return sum + currEl.cc;
              }

              return sum;
            }, 0) ?? 0;

          return (
            <LinkedAppItem
              appTitle={item.name}
              appLogo={item.logo}
              amount={Math.floor(100 * amount) / 100}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default LinkedApps;
