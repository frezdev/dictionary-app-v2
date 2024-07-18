import type { Metadata } from "next";
import { Header } from "@/components/Shared/Header";
import { Search } from "@/components/Shared/Search";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: {
    default: "MyDictionary",
    template: 'Result of %s',
  },
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-zinc-950">
        <StoreProvider>
          <div className="max-w-[640px] m-auto px-5">
            <Header />
            <Search />
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
