import { TabPanel } from "@mui/lab";

interface IInteractions {
  date: string;
  name: string;
  sector_id: string;
}

async function getData(): Promise<{
  interactions: IInteractions[];
  percentages: any;
}> {
  const res = await fetch("https://substantive.pythonanywhere.com/");
  const { interactions } = await res.json();

  const totalInteractions = interactions.length;

  const percentages = {} as any;

  for (const sector of interactions) {
    const item = sector.name;
    const count = percentages[item] || 0;
    percentages[item] = count + 1;
  }

  for (const item in percentages) {
    const count = percentages[item];
    const percentage = Math.floor((count / totalInteractions) * 100);
    percentages[item] = percentage;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return {
    interactions,
    percentages,
  };
}

export default async function AllInteractionsTab() {
  const data = await getData();
  return <TabPanel value="3">Item 3</TabPanel>;
}
