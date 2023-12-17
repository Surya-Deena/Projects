"use client";
import React, { Suspense, useEffect, useState } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Loading from "./loading";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const router = usePathname();
  useEffect(() => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [router]);

  return (
    <html lang="en">
      {/* <head>
        <title>Picture Collection</title>
      </head> */}
      <body className={inter.className}>
        <div className="text-3xl font-bold text-center bg-white border-solid shadow-lg py-4 fixed w-full top-0 z-[100]">
          Welcome to My Picture Collection
        </div>
        {/* <Suspense fallback={<Loading />}>{children}</Suspense> */}
        {loading ? <Loading /> : <div className=" pt-[69px]">{children}</div>}
        {/* <div className="my-20">
          <div
            className="text-center py-5 text-5xl font-bold textes"
            style={{ backgroundSize: `${10}%` }}
          >
            Demo Project For Practice
          </div>
        </div> */}
      </body>
    </html>
  );
}
