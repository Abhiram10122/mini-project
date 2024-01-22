import Details from "@/components/Details";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="m-auto flex max-w-[1440px] flex-col items-center justify-center">
      <Navbar />
      <div className="w-full px-[8rem]">
        <Details />
      </div>
    </main>
  );
}
