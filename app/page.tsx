import Image from "next/image";
import Nav from "./pages/Nav";
import Hero from "./pages/hero";
import Recognitions from "./pages/recognitions";
import Project from "./pages/projects";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black min-h-screen transition-colors duration-300">
      {/* <Nav /> */}
      <div className="flex flex-col flex-1 items-center justify-center font-sans ">
        <Hero />
        <Project />
        <Recognitions />
      </div>
    </div>
  );
}
