import { Stack, Typography } from "@mui/material";
import SolutionSmPng from "../../assets/solutionLogoSm.png";

const Footer = () => {
  return (
    <Stack
      width="100%"
      position="absolute"
      bottom="0"
      left="0"
      pb={3}
      gap={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <img src={SolutionSmPng} />
      <Typography fontSize="0.5rem">
        Supports <Typography variant="overline">Global Goals</Typography>
      </Typography>
    </Stack>
  );
};

export default Footer;
