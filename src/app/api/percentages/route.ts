import { IInteractions } from "@/interfaces/sectors";
import { NextResponse } from "next/server";

interface ISectorsCount {
  [key: string]: number;
}

export async function GET() {
  const res = await fetch(process.env.INTERACTIONS_API as string);
  const { interactions } = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const sectorsCount: ISectorsCount = {};

  //adds each unique sector to object with number of times counted
  interactions.forEach((interaction: IInteractions) => {
    const { name } = interaction;
    sectorsCount[name] = (sectorsCount[name] || 0) + 1;
  });

  const totalInteractions = interactions.length;

  const sectorsData = Object.keys(sectorsCount).map((sectorName, id) => ({
    sector: sectorName,
    percentage: Math.round(
      (sectorsCount[sectorName] / totalInteractions) * 100
    ),
    id,
  }));

  return NextResponse.json({
    percentages: sectorsData,
  });
}
