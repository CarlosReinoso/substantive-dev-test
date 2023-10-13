import { IInteractions } from "@/interfaces/sectors";
import { TabPanel } from "@mui/lab";

export default function PieChartTab({ data }: { data: IInteractions[] }) {
  return <TabPanel value="2">Item 2 </TabPanel>;
}
