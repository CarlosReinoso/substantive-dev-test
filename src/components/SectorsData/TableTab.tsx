import { IPercentage } from "@/interfaces/sectors";
import { TabPanel } from "@mui/lab";
import { Box, LinearProgress, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function TableTab({ data }: { data: IPercentage[] }) {
  const columns = [
    { field: "sector", headerName: "Sector", flex: 1 },
    {
      field: "percentage",
      headerName: "Percentage",
      flex: 1,
      renderCell: (params: any) => (
        <>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" {...params} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography
              variant="body2"
              color="text.secondary"
            >{`${params.value}%`}</Typography>
          </Box>
        </>
      ),
    },
  ];
  return (
    <TabPanel value="1">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={data} columns={columns} />
      </div>
    </TabPanel>
  );
}
