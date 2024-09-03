import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import immg1 from "./f.png";
function Skill() {
  return (
    <div className="px-[10%] pt-14 h-[100vh] flex justify-between">
      <aside className="w-[50%] mt-14">
        <Image src={immg1} className="w-full" />
      </aside>
      <aside className="w-[45%]">
        <div className="flex">
          <article className="bg-red-700 w-14 h-14 rounded-full p-3">
            <FaShoppingBag className="text-slate-100 text-3xl" />
          </article>
          <p className="text-xl mt-4 ml-3 font-bold">
            Premium learning experience
          </p>
        </div>
        <h1 className="text-6xl font-bold mt-10">
          Providing amazing online courses.
        </h1>
        <p className="mt-6 font-bold text-[1.1rem]">
          Master the skills that matters to you
        </p>
        <p className="mt-2 text-[0.9rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          non! Tenetur omnis eum eos quisquam deleniti temporibus nam
          exercitationem
        </p>
        <p className="mt-6 font-bold text-[1.1rem]">
          Increase your learning skills
        </p>
        <p className="mt-2 text-[0.9rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          non! Tenetur omnis eum eos quisquam deleniti temporibus nam
          exercitationem
        </p>
      </aside>
    </div>
  );
}

export default Skill;
