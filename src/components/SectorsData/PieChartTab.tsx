import { IPercentage } from "@/interfaces/sectors";
import { TabPanel } from "@mui/lab";
import { PieChart, pieArcClasses } from "@mui/x-charts/PieChart";

export default function PieChartTab({ data }: { data: IPercentage[] }) {
  const updatedKeysData = data.map((item: IPercentage) => ({
    label: item.sector,
    value: item.percentage,
    id: item.id,
  }));

  return (
    <TabPanel value="2">
      {" "}
      <PieChart
        series={[
          {
            data: updatedKeysData,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30 },
            outerRadius: 120,
          },
        ]}
        sx={{
          [`& .${pieArcClasses.faded}`]: {
            fill: "gray",
          },
        }}
        height={400}
      />
    </TabPanel>
  );
}
