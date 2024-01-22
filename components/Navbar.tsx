"use client";

import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSignedIn } = useUser();

  return (
    <nav className="mb-10 flex w-full items-center justify-between bg-white px-[8rem] py-3">
      <h1 className="text-3xl font-bold">Logo</h1>
      <div className="flex items-center gap-10">
        {isSignedIn ? (
          <div className="flex items-center gap-3 sm:gap-10">
            <UserButton
              afterSignOutUrl="/sign-in"
              appearance={{
                elements: {
                  avatarBox: "h-11 w-11",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </div>
        ) : (
          <div className="text-xl underline">
            <a href="/sign-in">sign-in</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
