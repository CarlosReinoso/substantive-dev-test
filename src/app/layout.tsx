import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "Substantie Research | Uncover Quality, Optomise Spend",
  description:
    "Providing transparency in previously opaque pricing models & fast-evolving supply dynamics. Independent comparison & discovery on investment research, ESG & market data solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
