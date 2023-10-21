import { Box } from "@mui/material";

interface DotProps {
  isActive: boolean;
}

const Dot = ({ isActive }: DotProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        opacity: isActive ? 1 : 0.5,
      }}
    />
  );
};

export default Dot;
