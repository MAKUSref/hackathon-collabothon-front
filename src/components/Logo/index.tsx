import { Typography } from "@mui/material";

interface LogoProps {
  size?: "l" | "s";
}

const Logo = ({ size = "s" }: LogoProps) => {
  return (
    <Typography
      variant={size === "l" ? "h3" : "h4"}
      sx={{
        textAlign: "center",
      }}
    >
      Carbbyn
    </Typography>
  );
};

export default Logo;
