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
  Divider,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import userIcon from "../../assets/user-profile.jpg";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        sx={{ color: "#fff", marginLeft: "15px", marginTop: "5px" }}
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
            width: "auto",
            height: "100%",
            background:
              "linear-gradient(180deg, #1D0093 0.42%, #6038FF 37.39%, #6038FF 40.6%, #8423FF 122.11%)",
          }}
          role="presentation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <IconButton
            sx={{ color: "#fff", marginLeft: "21px", marginTop: "5px" }}
          >
            <CloseRoundedIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              width: "100%",
              height: "200px",
            }}
          >
            <Avatar
              sx={{ width: 100, height: 100, alignSelf: "center" }}
              src={userIcon}
            />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
                marginTop: "17px",
              }}
            >
              Johny Deep
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 600,
                color: "#9A9A9A",
                marginTop: "6px",
              }}
            >
              johny.deep@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#fff",
                marginLeft: "60px",
                marginBottom: "5px",
              }}
            >
              Settings
            </Typography>
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem
                  sx={{ paddingLeft: "42px", color: "#fff" }}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <HelpOutlineRoundedIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary="About this app & Credit Carbon Info" />
                  </ListItemButton>
                </ListItem>
                <Divider
                  sx={{
                    margin: "0 20px",
                    borderColor: "rgba(237, 237, 237, 0.13)",
                  }}
                />
                <ListItem
                  sx={{ paddingLeft: "42px", color: "#fff" }}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <WidgetsRoundedIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary="See apps" />
                  </ListItemButton>
                </ListItem>
                <Divider
                  sx={{
                    margin: "0 20px",
                    borderColor: "rgba(237, 237, 237, 0.13)",
                  }}
                />
                <ListItem
                  sx={{ paddingLeft: "42px", color: "#fff" }}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <LogoutRoundedIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Sign out" />
                  </ListItemButton>
                </ListItem>
                <Divider
                  sx={{
                    margin: "0 20px",
                    borderColor: "rgba(237, 237, 237, 0.13)",
                  }}
                />
              </List>
            </nav>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
