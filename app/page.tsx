import Image from "next/image";
import Nav from "./pages/Nav";
import Hero from "./pages/hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
     <Nav />
     <Hero />
    </div>
  );
}
