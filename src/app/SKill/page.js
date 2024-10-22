import { FaShoppingBag } from "react-icons/fa";
import Image from "next/image";
import immg1 from "./f.png";
function Skill() {
  return (
    <div className="xl:px-[10%] lg:px-[7%] px-[7%] pt-14 pb-20 xl:h-[100vh] sm:block lg:flex justify-between">
      <aside className="lg:w-[45%] sm:w-[70%] xl:mt-14 lg:mt-28">
        <Image src={immg1} className="w-full" />
      </aside>
      <aside className="lg:w-[45%] sm:w-[80%] lg:mt-0 mt-10">
        <div className="flex">
          <article className="bg-red-700 lg:w-14 sm:w-10 sm:h-10 lg:h-14 rounded-full p-3">
            <FaShoppingBag className="text-slate-100  lg:text-3xl" />
          </article>
          <p className="xl:text-xl text-lg mt-3 sm:mt-2 lg:mt-4 ml-3 font-bold">
            Premium learning experience
          </p>
        </div>
        <h1 className="xl:text-6xl lg:text-5xl sm:text-3xl text-2xl font-bold mt-10 lg:mt-20 xl:mt-10">
          Providing amazing online courses.
        </h1>
        <p className="mt-6 font-bold  lg:text-[0.95rem] xl:text-[1.1rem]">
          Master the skills that matters to you
        </p>
        <p className="mt-2 text-slate-400 text-[0.75rem] lg:text-[0.8rem] xl:text-[0.9rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          non! Tenetur omnis eum eos quisquam deleniti temporibus nam
          exercitationem
        </p>
        <p className="mt-6 font-bold lg:text-[0.95rem] xl:text-[1.1rem]">
          Increase your learning skills
        </p>
        <p className="mt-2 text-slate-400 text-[0.75rem] lg:text-[0.8rem] xl:text-[0.9rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          non! Tenetur omnis eum eos quisquam deleniti temporibus nam
          exercitationem
        </p>
      </aside>
    </div>
  );
}

export default Skill;
