import b1 from "./b1.jpg";
import b2 from "./b2.jpg";
import b3 from "./b3.jpg";
import u1 from "./u1.jpg";
import u2 from "./u2.jpg";
import u3 from "./u3.jpg";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
function Article() {
  return (
    <div className="px-[10%] pt-16 pb-24 bg-[rgb(229,231,235)]">
      <p className="text-5xl font-bold">Latest Article</p>
      <aside className="mt-20 flex flex-wrap justify-between">
        <div className="bg-white w-[30%] rounded-md">
          <Image src={b1} className="w-full rounded-t-md" />
          <article className="py-5 px-4">
            <div className="flex justify-between">
              <figure className="flex">
                <Image src={u1} className="w-10 rounded-full" />
                <p className="text-slate-400 mt-2 ml-3">Jane Smith</p>
              </figure>
              <span className="flex mt-3">
                <FaHeart className="text-red-500 mt-1" />
                <p className="ml-2 text-slate-500">62</p>
              </span>
            </div>
            <p className="mt-5 font-bold">Understanding Javascript </p>
            <p className="mt-2 text-slate-400 text-[0.9rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            </p>
            <p className="ml-0 cursor-pointer mt-5 underline">Learn More</p>
          </article>
        </div>
        <div className="bg-white w-[30%] rounded-md">
          <Image src={b2} className="w-full rounded-t-md" />
          <article className="py-5 px-4">
            <div className="flex justify-between">
              <figure className="flex">
                <Image src={u1} className="w-10 rounded-full" />
                <p className="text-slate-400 mt-2 ml-3">John Doe</p>
              </figure>
              <span className="flex mt-3">
                <FaHeart className="text-red-500 mt-1" />
                <p className="ml-2 text-slate-500">45</p>
              </span>
            </div>
            <p className="mt-5 font-bold">A Guide to Node.js Event Loop</p>
            <p className="mt-2 text-slate-400 text-[0.9rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            </p>
            <p className="ml-0 cursor-pointer mt-5 underline">Learn More</p>
          </article>
        </div>
        <div className="bg-white w-[30%] rounded-md">
          <Image src={b3} className="w-full rounded-t-md" />
          <article className="py-5 px-4">
            <div className="flex justify-between">
              <figure className="flex">
                <Image src={u1} className="w-10 rounded-full" />
                <p className="text-slate-400 mt-2 ml-3">Alex Johnson</p>
              </figure>
              <span className="flex mt-3">
                <FaHeart className="text-red-500 mt-1" />
                <p className="ml-2 text-slate-500">78</p>
              </span>
            </div>
            <p className="mt-5 font-bold">Introduction to React Hooks</p>
            <p className="mt-2 text-slate-400 text-[0.9rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            </p>
            <p className="ml-0 cursor-pointer mt-5 underline">Learn More</p>
          </article>
        </div>
      </aside>
    </div>
  );
}

export default Article;
