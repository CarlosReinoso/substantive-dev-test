import { TabPanel } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AllInteractionsTab() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("api/interactions")
      .then((response) => {
        setData(response.data.interactions);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error</div>;
  }

  const columns = [
    { field: "date", headerName: "Date", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "sector_id", headerName: "Sector ID", flex: 1 },
  ];

  return (
    <TabPanel value="3">
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={data} columns={columns} pageSize={5} />
      </div>
    </TabPanel>
  );
}
