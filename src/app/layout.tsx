import React from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="bg-foreground shadow-lg text-gray-300 h-10">
          <div className="flex flex-row justify-center h-full text-2xl w-36 text-center hover:border-b-2 border-white">
            Check &zwj; <span className="text-blue-500"> /Me </span>
          </div>
        </header>
        <main className="pr-10 pl-10 mr-auto ml-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
