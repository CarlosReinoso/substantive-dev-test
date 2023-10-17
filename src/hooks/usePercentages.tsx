import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { IPercentage } from "@/interfaces/sectors";

function usePercentagesData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError<IPercentage> | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("api/percentages");
        setData(response.data.percentages);
      } catch (error) {
        setError(error as AxiosError<IPercentage>);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading, error };
}

export default usePercentagesData;
