"use client";
import { FaShoppingBag } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import r1 from "./r1.jpg";
import r2 from "./r2.jpg";
import r3 from "./r3.jpg";
import { FaStar } from "react-icons/fa6";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function Feedback() {
  return (
    <div className="px-[10%] bg-black text-white pt-24 h-[100vh] flex justify-between">
      <aside className="w-[30%]">
        <div className="flex">
          <article className="bg-red-700 w-14 h-14 rounded-full p-3">
            <FaShoppingBag className="text-slate-100 text-3xl" />
          </article>
          <p className="text-xl mt-4 ml-3 font-bold">Student Feedback</p>
        </div>
        <h1 className="text-[3rem] leading-[4rem] font-bold mt-10">
          Trusted by genius people.
        </h1>
        <p className="mt-8 text-slate-400 text-[0.9rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          non! Tenetur omnis eum eos quisquam deleniti temporibus nam
          exercitationem
        </p>
        <div className="mt-8 flex">
          <p className="text-5xl font-bold">99%</p>
          <p className="ml-9 text-sm">Student Complete Course Successfully</p>
        </div>
      </aside>
      <aside className="w-[60%] mt-28 h-[19rem] p-5 rounded-md bg-white">
        <Carousel
          additionalTransform={0}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          inifinite
          responsive={responsive}
          itemClass="item"
          showDots={false}
        >
          <div className="flex justify-between">
            <Image src={r1} className="h-[17rem] w-60" />
            <aside className="ml-10 mt-4">
              <div className="flex ">
                <FaStar className="text-yellow-600 text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
              </div>
              <p className="mt-4 text-slate-400 text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, non!etur omnis eum eos quisquam deleniti temporibus
                nam exercitationem Tenetur omnis eum eos quisquam deleniti
                temporibus nam exercitationem
              </p>
              <p className="text-black font-bold mt-10">Jasica Doe</p>
              <p className="text-slate-500">Web developer</p>
            </aside>
          </div>
          <div className="flex justify-between">
            <Image src={r2} className="h-[17rem] w-60" />
            <aside className="ml-10 mt-4">
              <div className="flex ">
                <FaStar className="text-yellow-600 text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
              </div>
              <p className="mt-4 text-slate-400 text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, non!etur omnis eum eos quisquam deleniti temporibus
                nam exercitationem Tenetur omnis eum eos quisquam deleniti
                temporibus nam exercitationem
              </p>
              <p className="text-black font-bold mt-10">Jonas Doe</p>
              <p className="text-slate-500">Mern developer</p>
            </aside>
          </div>
          <div className="flex justify-between">
            <Image src={r3} className="h-[17rem] w-60" />
            <aside className="ml-10 mt-4">
              <div className="flex ">
                <FaStar className="text-yellow-600 text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
              </div>
              <p className="mt-4 text-slate-400 text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, non!etur omnis eum eos quisquam deleniti temporibus
                nam exercitationem Tenetur omnis eum eos quisquam deleniti
                temporibus nam exercitationem
              </p>
              <p className="text-black font-bold mt-10">John Doe</p>
              <p className="text-slate-500">Next Js developer</p>
            </aside>
          </div>
        </Carousel>
      </aside>
    </div>
  );
}

export default Feedback;
