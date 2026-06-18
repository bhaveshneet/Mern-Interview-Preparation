
import "./globals.css";
import type { Metadata } from "next";

import ReduxProvider from "@/redux/provider";

export const metadata: Metadata = {
  title: "Todo App",
  description:
    "Full Stack Todo Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}