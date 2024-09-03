import img1 from "./logo.png";
import img2 from "./hero.png";
import Image from "next/image";
function Homepage() {
  return (
    <div className="bg-[rgb(30,27,75)] h-[100vh] px-[10%]  text-white">
      <Menubar />
      <Mainhome />
    </div>
  );
}

export default Homepage;

function Menubar() {
  return (
    <div className="flex justify-between">
      <Image src={img1} alt="img1" className="mt-0" />
      <ul className="flex justify-between mt-[2.8rem] text-xl font-bold">
        <li className="mr-6">Home</li>
        <li className="mr-6">About</li>
        <li className="mr-6">Courses</li>
        <li className="mr-6">Testimonial</li>
        <li className="mr-6">Blog</li>
        <li className="mr-6">Contact</li>
      </ul>
      <button className="bg-[rgb(139,24,71)] mt-[2.8rem] h-10 px-12 rounded-md">
        Signup Now
      </button>
    </div>
  );
}

function Mainhome() {
  return (
    <div className="flex ">
      <div className="mr-[7rem]">
        <h1 className="text-6xl font-bold">
          Best Online Platform for education
        </h1>
        <p className="mt-3 mb-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          non! Tenetur omnis eum eos quisquam deleniti temporibus nam
          exercitationem
        </p>
        <div className="mt-0">
          <button className="bg-[rgb(20,83,45)] mt-[3rem] h-12 px-12 rounded-md">
            Signup Now
          </button>
          <button className="bg-[rgb(161,98,7)] ml-5 mt-[3rem]  h-12 px-12 rounded-md">
            Learn More
          </button>
        </div>
        <aside className="mt-5 flex justify-between w-[80%]">
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
      <div className="mt-0">
        <Image src={img2} alt="img1" className="w-[60rem] mt-0" />
      </div>
    </div>
  );
}
