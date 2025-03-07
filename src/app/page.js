import Image from "next/image";
import Homepage from "@/app/home";
import Project from "./project";
import Project2 from "./project2";
import Contact from "./Contact/page";
import Search from "./Threed/page";

export default function Home() {
  return (
    <div >
       <Homepage/>
      <Search/>
       <Project/>
       <Contact/>
    </div>
  );
}
