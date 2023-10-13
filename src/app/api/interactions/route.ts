import { addId } from "@/util/mui-table";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://substantive.pythonanywhere.com/");
  const { interactions } = await res.json();

  return NextResponse.json({
    interactions: addId(interactions),
  });
}
