import { LiaCertificateSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";
function Certified() {
  return (
    <div className="xl:px-[10%] sm:px-[7%] px-[5%] pb-20 pt-10 sm:pt-10 lg:pt-24 xl:h-[100vh] sm:block lg:flex justify-between">
      <aside className="lg:w-[50%] sm:w-[80%]">
        <div className="flex">
          <article className="bg-red-700 w-10 h-10 sm:w-11 lg:w-14 sm:h-10 lg:h-14 rounded-full p-2 sm:p-2 lg:p-3">
            <LiaCertificateSolid className="text-slate-100 text-[1.6rem] sm:text-3xl lg:text-4xl" />
          </article>
          <p className="xl:text-xl lg:text-lg text-xl mt-1 sm:mt-4 ml-3 font-bold">
            Guaranteed and Certified
          </p>
        </div>
        <h1 className="xl:text-6xl lg:text-5xl sm:text-3xl  font-bold mt-6 sm:mt-10 lg:mt-20">
          Online learning wherever and whenever.
        </h1>
        <p className="mt-3 sm:text-[0.8rem] lg:text-[0.9rem] text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          non! Tenetur omnis eum eos quisquam deleniti temporibus nam
          exercitationem
        </p>
        <button className="bg-[rgb(0,0,0)] flex pt-2 lg:pt-3 sm:text-[0.8rem] lg:text-[1rem] text-white mt-[2rem] lg:mt-[3rem] h-9 lg:h-12 lg:px-10 px-5 sm:px-7 rounded-3xl">
          Learn More
          <FaArrowRight className="ml-3 mt-1" />
        </button>
      </aside>
      <aside className="lg:w-[40%] sm:w-[80%] lg:mt-0 sm:mt-14 mt-7">
        <div>
          <p className="xl:text-[5rem] lg:text-[4rem] text-[2rem] text-slate-400">
            01
          </p>
          <p className="xl:text-2xl text-xl font-bold">Flexible Schedule</p>
          <p className="mt-3 text-[0.9rem] text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            non! Tenetur omnis eum eos quisquam deleniti temporibus nam
            exercitationem
          </p>
        </div>
        <div className="mt-3">
          <p className="xl:text-[5rem] lg:text-[4rem] text-[2rem] text-slate-400">
            02
          </p>
          <p className="xl:text-2xl text-xl font-bold">Pocket Friendly</p>
          <p className="mt-3 text-[0.9rem] text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            non! Tenetur omnis eum eos quisquam deleniti temporibus nam
            exercitationem
          </p>
        </div>
      </aside>
    </div>
  );
}

export default Certified;
