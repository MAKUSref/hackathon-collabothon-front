import "./NavigationTopBar.style.css";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { To, useNavigate } from "react-router-dom";

interface NavigationTopBarProps {
  backIcon: ReactJSXElement;
  navigateTo: To;
  label?: string;
}

const NavigationTopBar = ({
  backIcon,
  navigateTo,
  label,
}: NavigationTopBarProps) => {
  const navigate = useNavigate();

  return (
    <Box className="navigation-top-bar">
      <Stack direction="row" alignItems="center">
        <IconButton
          onClick={() => {
            navigate(navigateTo);
          }}
          className="cancel-button"
        >
          {backIcon}
        </IconButton>
        <Typography color="white" fontWeight="600" ml={2}>
          {label}
        </Typography>
      </Stack>
    </Box>
  );
};

export default NavigationTopBar;
