import * as React from "react";
import Box from "@mui/material/Box";
import SectorDataTabs from "@/components/SectorsData/SectorsDataTabs";

export default function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <SectorDataTabs />
    </Box>
  );
}
