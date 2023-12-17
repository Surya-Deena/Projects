"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Data } from "../../../constents/image-details";

export const Blogs = (props: any) => {
  const { pageData } = props;
  const route: any = useRouter();
  return (
    <div className="w-10/12 mx-auto pt-3">
      <div className="w-full relative">
        <div className="text-[48px] px-5 font-semibold absolute z-10 texts gradient bottom-0 pb-3 pt-5 capitalize w-full">
          {pageData?.slug?.replace("_", " ")}
        </div>
        <Image
          src={Data?.[pageData.slug]?.img}
          alt="image"
          className=" w-full max-h-[650px] object-cover object-center"
        />
      </div>
      <div className="my-5">
        {/* <h1 className="text-2xl font-semibold capitalize mb-3">{pageData.slug}</h1> */}
        <div className="first-letter:ml-10 text-2xl text-medium ">
          {Data?.[pageData.slug]?.para}
        </div>
      </div>
    </div>
  );
};
