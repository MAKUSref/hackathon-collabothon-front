import { Stack, Box, Skeleton, Typography } from "@mui/material";

const HistoryItemSkeleton = () => {
  return (
    <Stack direction="row" mb={3}>
      <Box>
        <Skeleton
          variant="rounded"
          sx={{ borderRadius: "10px" }}
          height={47}
          width={47}
        />
      </Box>
      <Stack ml={3} width="100%" direction="column" justifyContent="center">
        <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>
          <Skeleton width={100} />
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.69)",
            fontSize: "10px",
            fontWeight: 600,
          }}
        >
          <Skeleton width={50} />
        </Typography>
      </Stack>
    </Stack>
  );
};

export default HistoryItemSkeleton;
