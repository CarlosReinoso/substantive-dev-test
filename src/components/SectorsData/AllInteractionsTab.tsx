import { IInteractions } from "@/interfaces/sectors";
import { addId } from "@/util/mui-table";
import { TabPanel } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export default function AllInteractionsTab() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError<IInteractions> | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          process.env.NEXT_PUBLIC_INTERACTIONS_API as string
        );
        setData(res.data.interactions);
        setLoading(false);
      } catch (error) {
        setError(error as AxiosError<IInteractions>);
        setLoading(false);
      }
    })();
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
        <DataGrid rows={addId(data)} columns={columns} />
      </div>
    </TabPanel>
  );
}
