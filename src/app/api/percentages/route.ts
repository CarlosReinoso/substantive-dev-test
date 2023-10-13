import { NextResponse } from "next/server";

export async function GET() {
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

  return NextResponse.json({
    percentages,
  });
}
