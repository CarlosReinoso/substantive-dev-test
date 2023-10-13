import { TabPanel } from "@mui/lab";
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
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return <TabPanel value="3">Item 3</TabPanel>;
}
