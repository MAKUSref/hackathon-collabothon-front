import { useState } from "react";
import {
  Box,
  SwipeableDrawer,
  IconButton,
  Avatar,
  Typography,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/session/sessionSlice";

interface ItemProps {
  label: string;
  icon: ReactJSXElement;
  action: () => void;
}

const Item = ({ action, label, icon }: ItemProps) => {
  return (
    <ListItem sx={{ color: "#fff" }}>
      <ListItemButton onClick={action}>
        <ListItemIcon sx={{ color: "#fff", minWidth: "40px" }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} />
      </ListItemButton>
    </ListItem>
  );
};

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { email, picture, username } = useAppSelector((state) => state.session);
  const dispatch = useAppDispatch();

  return (
    <>
      <IconButton
        sx={{ marginTop: "5px" }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MenuRoundedIcon />
      </IconButton>
      <SwipeableDrawer
        PaperProps={{
          sx: { width: "100%" },
        }}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        <Box
          sx={{
            height: "100%",
            background:
              "linear-gradient(180deg, #1D0093 0.42%, #6038FF 37.39%, #6038FF 40.6%, #8423FF 122.11%)",
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <IconButton sx={{ marginLeft: "10px", marginTop: "5px" }}>
            <CloseRoundedIcon />
          </IconButton>
          <Stack justifyContent="center" alignItems="center" mt={5}>
            <Avatar
              sx={{ width: 120, height: 120, border: "5px white solid" }}
              src={picture}
            />
            <Typography fontSize="17px" fontWeight={600} mt={3} color="white">
              {username}
            </Typography>
            <Typography
              fontSize="10px"
              mt="5px"
              mb={2}
              color="white"
              sx={{
                opacity: 0.7,
              }}
            >
              {email}
            </Typography>
          </Stack>
          <Stack>
            <Typography
              fontSize="10px"
              fontWeight={600}
              mt={1}
              color="white"
              ml={4}
            >
              Settings
            </Typography>
            <List>
              <Item
                label="About this app & Credit Carbon Info"
                action={() => {}}
                icon={<HelpOutlineRoundedIcon />}
              />
              <Item
                label="See apps"
                action={() => {}}
                icon={<WidgetsRoundedIcon />}
              />
              <Item
                label="Sign out"
                action={() => dispatch(logOut())}
                icon={<LogoutRoundedIcon />}
              />
            </List>
          </Stack>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
