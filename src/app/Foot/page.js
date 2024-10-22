import img1 from "./logo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
function Foot() {
  return (
    <div className="bg-black flex flex-wrap justify-between text-slate-500 xl:px-[10%] lg:px-[5%] sm:px-[7%] pb-10 pt-14">
      <aside className="lg:w-[28%] sm:w-[45%]">
        <Image src={img1} />
        <p className="text-[0.8rem]">
          Lorem ipsum dolor sit amet consectetur lorem,Ipsum
        </p>
        <div className="mt-7 text-xl w-[40%] flex justify-between">
          <FaFacebookF className="text-blue-700" />
          <FaTwitter className="text-green-400" />
          <FaYoutube className="text-red-700" />
          <FiInstagram className="text-red-400" />
        </div>
      </aside>
      <aside className="leading-[2rem] lg:w-[28%] sm:w-[45%]">
        <p className="font-bold text-white">Popular</p>
        <div className="text-[0.8rem]">
          <p>Web development</p>
          <p>Hacking</p>
          <p>UI/UX Design</p>
          <p>App Development</p>
          <p>Desktop Development</p>
          <p>Digital Marketing</p>
        </div>
      </aside>
      <aside className="leading-[2rem] lg:w-[28%] sm:w-[45%] sm:mt-7 lg:mt-0">
        <p className="font-bold text-white">Quick</p>
        <div className="text-[0.8rem]">
          <p>Home</p>
          <p>About</p>
          <p>Courses</p>
          <p>Instructor</p>
          <p>Profile</p>
          <p>Privacy Police</p>
        </div>
      </aside>
      <aside className="lg:w-[28%] sm:w-[45%] sm:mt-7 lg:mt-0">
        <p className="text-white font-bold">Subscribe our Newsletter</p>
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2 pl-2 px-14 rounded-md text-[0.8rem] bg-slate-800 mt-5"
        />
        <br></br>
        <button className="bg-red-700 text-[0.8rem] text-white w-[15rem] p-2 rounded-md mt-3">
          Subscribe
        </button>
      </aside>
    </div>
  );
}

export default Foot;
