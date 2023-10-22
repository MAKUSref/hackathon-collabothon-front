import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ccSmSvg from "../../assets/ccSm.svg";

interface HistoryItemI {
  amount: number;
  appLogo: string;
  appTitle: string;
  action: string;
}

const HistoryItem = ({ amount, appLogo, appTitle, action }: HistoryItemI) => {
  return (
    <Stack direction="row" mb={3}>
      <Box>
        <img src={appLogo} height={47} width={47} />
      </Box>
      <Stack ml={3} width="100%" direction="column" justifyContent="center">
        <Box sx={{ fontSize: "14px", fontWeight: 600 }}>{appTitle}</Box>
        <Box
          sx={{
            color: "rgba(255, 255, 255, 0.69)",
            fontSize: "10px",
            fontWeight: 600,
          }}
        >
          {action}
        </Box>
      </Stack>
      <Stack
        justifyContent="end"
        width="100%"
        alignItems="center"
        flexDirection="row"
      >
        + {amount}{" "}
        <img
          style={{ marginLeft: "6px" }}
          width="15px"
          height="15px"
          src={ccSmSvg}
        />
      </Stack>
    </Stack>
  );
};

export default HistoryItem;
