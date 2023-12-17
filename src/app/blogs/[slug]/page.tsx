// "use client";
// import React from "react";
import { Blogs } from "./blogs";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: params?.slug,
    description: "You Can Download any images",
  };
}

export default function Page(params: any) {
  return <Blogs pageData={params?.params} />;
}
