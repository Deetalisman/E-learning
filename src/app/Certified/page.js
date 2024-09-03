import { LiaCertificateSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";
function Certified() {
  return (
    <div className="px-[10%] pt-24 h-[100vh] flex justify-between">
      <aside className="w-[50%]">
        <div className="flex">
          <article className="bg-red-700 w-14 h-14 rounded-full p-3">
            <LiaCertificateSolid className="text-slate-100 text-4xl" />
          </article>
          <p className="text-xl mt-4 ml-3 font-bold">
            Guaranteed and Certified
          </p>
        </div>
        <h1 className="text-6xl font-bold mt-10">
          Online learning wherever and whenever.
        </h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          non! Tenetur omnis eum eos quisquam deleniti temporibus nam
          exercitationem
        </p>
        <button className="bg-[rgb(0,0,0)] flex pt-3 text-white mt-[3rem]  h-12 px-10 rounded-3xl">
          Learn More
          <FaArrowRight className="ml-3 mt-1" />
        </button>
      </aside>
      <aside className="w-[40%]">
        <div>
          <p className="text-[5rem] text-slate-400">01</p>
          <p className="text-2xl font-bold">Flexible Schedule</p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            non! Tenetur omnis eum eos quisquam deleniti temporibus nam
            exercitationem
          </p>
        </div>
        <div className="mt-3">
          <p className="text-[5rem] text-slate-400">02</p>
          <p className="text-2xl font-bold">Pocket Friendly</p>
          <p className="mt-3">
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
