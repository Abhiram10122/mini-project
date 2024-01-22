"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import Clippings from "./clippings";

const Details = () => {
  const { user } = useUser();
  return (
    <main className="rounded-lg bg-white shadow-md">
      <div className="mb-5 flex items-center gap-10 rounded-lg p-5 shadow-md ">
        <div className="flex items-center gap-10">
          <Image
            src={user?.imageUrl || ""}
            alt="Profile Pic"
            height={3000}
            width={3000}
            className="m-1 size-[8rem] rounded-full"
          />

          <div className="flex flex-col gap-8">
            <h1 className="text-[1.75rem] font-semibold text-[#220b49]">
              Name of Guide
            </h1>
            <div className="flex gap-7">
              <Clippings heading="Rating" value="4.95" />
              <Clippings heading="Work as guide" value="65 times" />
              <Clippings heading="Languages" value="English, Telugu" />
              <Clippings heading="City/Location" value="Hyderabad/Telangana" />
            </div>
          </div>
        </div>
        <div className="pl-16 text-3xl font-bold text-[#220b49]">20$/hr</div>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <h2 className="text-xl font-bold text-[#df0863]">About Me</h2>
        <p className=" font-medium text-[#220b49]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <h2 className="text-xl font-bold text-[#df0863]">Requests</h2>
        <p className=" font-medium text-[#220b49]">No requests at the moment</p>
      </div>
    </main>
  );
};

export default Details;
