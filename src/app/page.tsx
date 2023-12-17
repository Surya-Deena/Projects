import type { Metadata } from "next";
import HomePage from "./home-page";

export const metadata: Metadata = {
  title: "Picture Collection",
  description: "You Can Download any images",
};
export default function Home() {
  return <HomePage />;
}
