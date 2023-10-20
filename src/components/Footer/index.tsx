import { Stack, Typography } from "@mui/material";
import SolutionSmPng from "../../assets/solutionLogoSm.png";

const Footer = () => {
  return (
    <Stack
      width="100%"
      position="absolute"
      bottom="0"
      pb={3}
      gap={1}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <img src={SolutionSmPng} />
      <Typography variant="body1" fontSize="0.7rem">
        Supports <Typography variant="overline">Global Goals</Typography>
      </Typography>
    </Stack>
  );
};

export default Footer;
