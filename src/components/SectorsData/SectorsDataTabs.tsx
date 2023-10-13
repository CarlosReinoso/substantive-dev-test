"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TableTab from "./TableTab";
import PieChartTab from "./PieChartTab";
import AllInteractionsTab from "./AllInteractionsTab";

export default function SectorsDataTabs() {
  const [value, setValue] = React.useState("3");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "60%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            sx={{ display: "flex", justifyContent: "center" }}
            onChange={handleChange}
          >
            <Tab label="Table" value="1" />
            <Tab label="Pie Chart" value="2" />
            <Tab label="All Interactions" value="3" />
          </TabList>
        </Box>
        <TableTab />
        <PieChartTab />
        <AllInteractionsTab />
      </TabContext>
    </Box>
  );
}
