"use client";

import Details from "@/components/Details";
import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { user } = useUser();
  const email = user?.emailAddresses;
  const getdata = async (email: any) => {
    const res = await fetch(`/api/guides/?email=${email}`);
    const resJson = await res.json();
    const exists = resJson.exists;
    if (!exists) {
      router.push("/forms");
    }
  };

  useEffect(() => {
    if (email) {
      getdata(email);
    }
  }, [email]);

  return (
    <main className="m-auto flex max-w-[1440px] flex-col items-center justify-center">
      <Navbar />
      <div className="w-full px-[8rem]">
        <Details />
      </div>
    </main>
  );
}
