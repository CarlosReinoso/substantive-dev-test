import { IInteractions } from "@/interfaces/sectors";
import { NextResponse } from "next/server";

interface ISectorCounts {
  [key: string]: number;
}

export async function GET() {
  const res = await fetch("https://substantive.pythonanywhere.com/");
  const { interactions } = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const sectorCounts: ISectorCounts = {};

  interactions.forEach((interaction: IInteractions) => {
    const { name } = interaction;
    sectorCounts[name] = (sectorCounts[name] || 0) + 1;
  });

  const totalInteractions = interactions.length;

  const sectorsWithPercentage = Object.keys(sectorCounts).map(
    (sectorName, id) => ({
      sector: sectorName,
      percentage: Math.floor(
        (sectorCounts[sectorName] / totalInteractions) * 100
      ),
      id,
    })
  );
  return NextResponse.json({
    percentages: sectorsWithPercentage,
  });
}
