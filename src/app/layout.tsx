"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={inter.className}>
          <div className="flex flex-col overflow-y-auto w-full h-screen items-center">
            {children}
          </div>
        </body>
      </Provider>
    </html>
  );
}
