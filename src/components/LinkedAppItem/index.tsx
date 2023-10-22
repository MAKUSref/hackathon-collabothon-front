import Stack from "@mui/material/Stack";
import ccSmSvg from "../../assets/ccSm.svg";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

interface LinkedAppItemProps {
  amount: number;
  appLogo: string;
  appTitle: string;
  // action: string;
}

const LinkedAppItem = ({ appLogo, appTitle, amount }: LinkedAppItemProps) => {
  return (
    <ListItem
      // disablePadding
      sx={{
        py: "12px"
      }}
      secondaryAction={
        <Stack alignItems="center" flexDirection="row">
          + {amount}{" "}
          <img
            style={{ marginLeft: "6px" }}
            width="15px"
            height="15px"
            src={ccSmSvg}
          />
        </Stack>
      }
    >
      <ListItemAvatar>
        <Avatar src={appLogo}></Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={appTitle}
        // secondary={action}
        secondaryTypographyProps={{
          color: "rgba(255, 255, 255, 0.69)",
          fontSize: "10px",
          fontWeight: 600,
        }}
        primaryTypographyProps={{
          fontSize: "14px",
          fontWeight: 600,
        }}
      />
    </ListItem>
  );
};

export default LinkedAppItem;


