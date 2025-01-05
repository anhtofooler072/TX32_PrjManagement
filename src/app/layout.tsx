import Navbar from "@/components/Navbar/Navbar";
import Topbar from "@/components/Navbar/Topbar";
import React from "react";
import "tailwindcss/tailwind.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-start w-screen h-screen">
        <Topbar />
        <div className="flex flex-row justify-between gap-2 p-2 w-full h-full">
          <div className="flex flex-col justify-between w-1/6 p-3 border-2 border-gray-200 gap-4 rounded-md shadow-md h-full">
            <Navbar />
          </div>
          <main className="w-5/6 border-2 border-gray-200 bg-slate-100 rounded-md shadow-md overflow-hidden h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
