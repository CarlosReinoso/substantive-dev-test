import { NextResponse } from "next/server";

interface IInteractions {
  date: string;
  name: string;
  sector_id: string;
  id: number;
}

export async function GET() {
  const res = await fetch("https://substantive.pythonanywhere.com/");
  const { interactions } = await res.json();
  const interactionsWithId = interactions.map(
    (item: IInteractions, index: number) => {
      return { ...item, id: index };
    }
  );

  return NextResponse.json({
    interactions: interactionsWithId,
  });
}
