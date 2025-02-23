import Image from "next/image";
import Homepage from "@/app/home";
import Project from "./project";
import Project2 from "./project2";
import Skill from "./skill";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <div >
       <Homepage/>
       <Skill/>
       <Project/>
       <Contact/>
    </div>
  );
}
