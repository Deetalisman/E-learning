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
    <div className="xl:px-[10%] lg:px-[7%] sm:px-[9%] bg-black text-white xl:pt-24 sm:pt-14 sm:pb-20 xl:h-[100vh] lg:flex justify-between">
      <aside className="xl:w-[30%] lg:w-[35%]">
        <div className="flex">
          <article className="bg-red-700 sm:w-10 lg:w-14 sm:h-10 lg:h-14 rounded-full p-3">
            <FaShoppingBag className="text-slate-100  lg:text-3xl" />
          </article>
          <p className="text-xl sm:mt-2 lg:mt-4 ml-3 font-bold">
            Student Feedback
          </p>
        </div>
        <h1 className="xl:text-[3rem] lg:text-[2.5rem] sm:text-[1.5rem] lg:leading-[3rem] xl:leading-[4rem] font-bold sm:mt-10 lg:mt-20 xl:mt-10">
          Trusted by genius people.
        </h1>
        <p className="lg:mt-8 sm:mt-4 text-slate-400 text-[0.9rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          non! Tenetur omnis eum eos quisquam deleniti temporibus nam
          exercitationem
        </p>
        <div className="mt-8 flex">
          <p className="xl:text-5xl lg:text-4xl sm:text-2xl font-bold">99%</p>
          <p className="sm:ml-5 lg:ml-9 lg:mt-0 sm:mt-2 xl:text-sm sm:text-[0.8rem]">
            Student Complete Course Successfully
          </p>
        </div>
      </aside>
      <aside className="lg:w-[55%] lg xl:w-[60%] sm:mt-16 lg:mt-28 h-[19rem] p-5 rounded-md bg-white">
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
            <aside className="xl:ml-10 xl:mt-4 lg:mt-0 sm:ml-6">
              <div className="flex ">
                <FaStar className="text-yellow-600 text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
              </div>
              <p className="mt-4 text-slate-400 sm:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, non!etur omnis eum eos quisquam deleniti temporibus
                nam exercitationem Tenetur omnis eum eos quisquam deleniti
                temporibus nam exercitationem
              </p>
              <p className="text-black font-bold sm:mt-9  lg:mt-6 xl:mt-10">
                Jasica Doe
              </p>
              <p className="text-slate-500">Web developer</p>
            </aside>
          </div>
          <div className="flex justify-between">
            <Image src={r2} className="h-[17rem] w-60" />
            <aside className="xl:ml-10 xl:mt-4 lg:mt-0 sm:ml-6">
              <div className="flex ">
                <FaStar className="text-yellow-600 text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
              </div>
              <p className="mt-4 text-slate-400 sm:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, non!etur omnis eum eos quisquam deleniti temporibus
                nam exercitationem Tenetur omnis eum eos quisquam deleniti
                temporibus nam exercitationem
              </p>
              <p className="text-black font-bold sm:mt-9  lg:mt-6 xl:mt-10">
                Jonas Doe
              </p>
              <p className="text-slate-500">Mern developer</p>
            </aside>
          </div>
          <div className="flex justify-between">
            <Image src={r3} className="h-[17rem] w-60" />
            <aside className="xl:ml-10 sm:ml-6 xl:mt-4 lg:mt-0">
              <div className="flex ">
                <FaStar className="text-yellow-600 text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
                <FaStar className="text-yellow-600  text-2xl" />
              </div>
              <p className="mt-4 text-slate-400 sm:text-[0.9rem] lg:text-[0.8rem] xl:text-[0.9rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, non!etur omnis eum eos quisquam deleniti temporibus
                nam exercitationem Tenetur omnis eum eos quisquam deleniti
                temporibus nam exercitationem
              </p>
              <p className="text-black font-bold sm:mt-9 lg:mt-6 xl:mt-10">
                John Doe
              </p>
              <p className="text-slate-500">Next Js developer</p>
            </aside>
          </div>
        </Carousel>
      </aside>
    </div>
  );
}

export default Feedback;
