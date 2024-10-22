"use client";
import img1 from "./logo.png";
import img2 from "./hero.png";
import Image from "next/image";
import { useState } from "react";
function Homepage() {
  const [navbar, setnavbar] = useState(false);
  return (
    <div className="bg-[rgb(30,27,75)] relative h-[100vh] sm:px-[5%] lg:px-[7%] xl:px-[10%]  text-white">
      <Menubar setnavbar={setnavbar} navbar={navbar} />
      <Mainhome />
      <Navebar setnavbar={setnavbar} navbar={navbar} />
    </div>
  );
}

export default Homepage;

function Navebar({ setnavbar, navbar }) {
  function handleclose() {
    setnavbar(false);
  }
  return (
    <div className={navbar ? "block" : "hidden"}>
      <div className=" absolute left-0 top-0 h-[100vh] w-[100%] bg-[rgba(3,3,3,0.6)]">
        <ul className=" relative h-[100vh] w-[60%] pl-10 bg-[rgb(49,46,129)]  pt-[30vh] text-[1.2rem] font-bold">
          <li className="mr-6 mb-3">Home</li>
          <li className="mr-6 mb-3">About</li>
          <li className="mr-6 mb-3">Courses</li>
          <li className="mr-6 mb-3">Testimonial</li>
          <li className="mr-6 mb-3">Blog</li>
          <li className="mr-6 mb-3">Contact</li>
          <div
            className="absolute cursor-pointer top-5 text-2xl right-10"
            onClick={handleclose}
          >
            X
          </div>
        </ul>
      </div>
    </div>
  );
}

function Menubar({ setnavbar, navbar }) {
  function handlenavbar() {
    setnavbar(true);
  }
  return (
    <div className="flex justify-between pr-5 sm:pr-0">
      <Image src={img1} alt="img1" className="mt-0" />
      <ul className="lg:flex hidden justify-between  mt-[3.3rem] lg:text-[1rem] xl:text-[1.1rem] font-bold">
        <li className="mr-6">Home</li>
        <li className="mr-6">About</li>
        <li className="mr-6">Courses</li>
        <li className="mr-6">Testimonial</li>
        <li className="mr-6">Blog</li>
        <li className="mr-6">Contact</li>
      </ul>
      <div className="flex">
        <button className="bg-[rgb(139,24,71)] lg:text-[1rem] text-[0.8rem] mt-[2.8rem] h-9 lg:h-10 px-10 lg:px-12 rounded-md">
          Signup Now
        </button>
        <aside
          onClick={handlenavbar}
          className="mt-14 cursor-pointer ml-3 sm:ml-6"
        >
          <div className="bg-white h-1 rounded-lg w-8 mb-1"></div>
          <div className="bg-white  h-1 rounded-lg w-8 mb-1"></div>
          <div className="bg-white float-right h-1 rounded-lg w-5"></div>
        </aside>
      </div>
    </div>
  );
}

function Mainhome() {
  return (
    <div className="flex mt-[10vh] sm:mt-[20vh] lg:mt-5 justify-between">
      <div className="mr-[2rem] sm:mr-[20%] lg:mr-0 ml-[2.2rem]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[3rem]">
          Best Online Platform for education.
        </h1>
        <p className="mt-7 mb-0 text-[0.9rem] text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          non! Tenetur omnis eum eos quisquam deleniti temporibus nam
          exercitationem
        </p>
        <div className="mt-0">
          <button className="bg-[rgb(20,83,45)] text-[0.9rem] mt-[3rem] h-10 lg:h-12 sm:px-12 px-8 rounded-md">
            Signup Now
          </button>
          <button className="bg-[rgb(161,98,7)] text-[0.9rem] ml-5 mt-[3rem]  h-10 lg:h-12 sm:px-12 px-8 rounded-md">
            Learn More
          </button>
        </div>
        <aside className="sm:mt-5 mt-8 flex justify-between w-[60%] sm:w-[80%]">
          <div>
            <p className="text-2xl font-bold">260+</p>
            <nav className="w-28 mt-2 h-1 rounded-md bg-[rgb(20,83,45)]"></nav>
            <p className="mt-2 text-lg text-slate-400">Tutors</p>
          </div>
          <div>
            <p className="text-2xl font-bold">2260+</p>
            <nav className="w-28 mt-2 h-1 rounded-md bg-[rgb(37,99,235)]"></nav>
            <p className="mt-2 text-lg text-slate-400">Students</p>
          </div>
          <div>
            <p className="text-2xl font-bold">60+</p>
            <nav className="w-28 mt-2 h-1 rounded-md bg-[rgb(139,24,71)]"></nav>
            <p className="mt-2 text-lg text-slate-400">Courses</p>
          </div>
        </aside>
      </div>
      <div className="mt-0 lg:block hidden">
        <Image src={img2} alt="img1" className="w-[60rem] mt-0" />
      </div>
    </div>
  );
}
