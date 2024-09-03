import Homepage from "@/app/Homepage/page";
import Image from "next/image";
import Certified from "./Certified/page";
import Course from "./Course/page";
import Skill from "./SKill/page";
import Feedback from "./Feedback/page";
import Article from "./Article/page";
import Foot from "./Foot/page";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Certified />
      <Course />
      <Skill />
      <Feedback />
      <Article />
      <Foot />
    </div>
  );
}
