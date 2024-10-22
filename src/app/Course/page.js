import imgg1 from "./c1.jpg";
import imgg2 from "./c2.jpg";
import imgg3 from "./c3.jpg";
import imgg4 from "./c4.jpg";
import imgg5 from "./c5.jpg";
import imgg6 from "./c6.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaFile } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
function Course() {
  return (
    <div className="xl:px-[10%] lg:px-[9%] sm:px-[10%] px-[7%] xl:pt-16 pt-10 pb-24 bg-[rgb(229,231,235)]">
      <p className="xl:text-5xl sm:text-4xl text-3xl font-bold">
        Popular Courses
      </p>
      <aside className="xl:mt-20 mt-10 flex flex-wrap justify-between">
        <div className="bg-white sm:w-[100%] lg:w-[40%] rounded-md">
          <Image src={imgg1} className="w-full rounded-t-md" />
          <article className="py-10 px-4">
            <p>
              Programming <span className="text-slate-400 ml-4">John Doe</span>
            </p>
            <p className="mt-2 font-bold">Introduction to Javascript</p>
            <figure className="mt-2 flex mb-4">
              <div className="flex">
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
              </div>
              <p className="ml-3 text-red-700 text-sm">450 Reviews</p>
            </figure>
            <hr></hr>
            <div className="flex justify-between mt-5">
              <figure className="flex">
                <FaFile className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">20 Lessons</p>
              </figure>
              <figure className="flex">
                <ImUsers className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">150 Students</p>
              </figure>
            </div>
          </article>
        </div>
        <div className="bg-white sm:w-[100%] lg:w-[40%] rounded-md mt-10">
          <Image src={imgg2} className="w-full rounded-t-md" />
          <article className="py-10 px-4">
            <p>
              Programming{" "}
              <span className="text-slate-400 ml-4">Jane Smith</span>
            </p>
            <p className="mt-2 font-bold">Advanced Python Programming</p>
            <figure className="mt-2 flex mb-4">
              <div className="flex">
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
              </div>
              <p className="ml-3 text-red-700 text-sm">670 Reviews</p>
            </figure>
            <hr></hr>
            <div className="flex justify-between mt-5">
              <figure className="flex">
                <FaFile className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">25 Lessons</p>
              </figure>
              <figure className="flex">
                <ImUsers className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">120 Students</p>
              </figure>
            </div>
          </article>
        </div>
        <div className="bg-white sm:w-[100%] lg:w-[40%] rounded-md mt-10">
          <Image src={imgg3} className="w-full rounded-t-md" />
          <article className="py-10 px-4">
            <p>
              Programming{" "}
              <span className="text-slate-400 ml-4">Emily Johnson</span>
            </p>
            <p className="mt-2 font-bold">UI/UX Design Fundamentals</p>
            <figure className="mt-2 flex mb-4">
              <div className="flex">
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
              </div>
              <p className="ml-3 text-red-700 text-sm">460 Reviews</p>
            </figure>
            <hr></hr>
            <div className="flex justify-between mt-5">
              <figure className="flex">
                <FaFile className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">30 Lessons</p>
              </figure>
              <figure className="flex">
                <ImUsers className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">90 Students</p>
              </figure>
            </div>
          </article>
        </div>
        <div className="bg-white sm:w-[100%] lg:w-[40%] rounded-md mt-10">
          <Image src={imgg4} className="w-full rounded-t-md" />
          <article className="py-10 px-4">
            <p>
              Programming{" "}
              <span className="text-slate-400 ml-4">Michael Brown</span>
            </p>
            <p className="mt-2 font-bold">Ethical Hacking Basics</p>
            <figure className="mt-2 flex mb-4">
              <div className="flex">
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
              </div>
              <p className="ml-3 text-red-700 text-sm">440 Reviews</p>
            </figure>
            <hr></hr>
            <div className="flex justify-between mt-5">
              <figure className="flex">
                <FaFile className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">18 Lessons</p>
              </figure>
              <figure className="flex">
                <ImUsers className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">110 Students</p>
              </figure>
            </div>
          </article>
        </div>
        <div className="bg-white sm:w-[100%] lg:w-[40%] rounded-md mt-10">
          <Image src={imgg5} className="w-full rounded-t-md" />
          <article className="py-10 px-4">
            <p>
              Programming <span className="text-slate-400 ml-4">Chris Lee</span>
            </p>
            <p className="mt-2 font-bold">Full Stack Web Development</p>
            <figure className="mt-2 flex mb-4">
              <div className="flex">
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
              </div>
              <p className="ml-3 text-red-700 text-sm">480 Reviews</p>
            </figure>
            <hr></hr>
            <div className="flex justify-between mt-5">
              <figure className="flex">
                <FaFile className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">40 Lessons</p>
              </figure>
              <figure className="flex">
                <ImUsers className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">200 Students</p>
              </figure>
            </div>
          </article>
        </div>
        <div className="bg-white sm:w-[100%] lg:w-[40%] rounded-md mt-10">
          <Image src={imgg6} className="w-full rounded-t-md" />
          <article className="py-10 px-4">
            <p>
              Programming{" "}
              <span className="text-slate-400 ml-4">Alex Wilson</span>
            </p>
            <p className="mt-2 font-bold">Software Testing and QA</p>
            <figure className="mt-2 flex mb-4">
              <div className="flex">
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
                <FaStar className="text-yellow-600" />
              </div>
              <p className="ml-3 text-red-700 text-sm">430 Reviews</p>
            </figure>
            <hr></hr>
            <div className="flex justify-between mt-5">
              <figure className="flex">
                <FaFile className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">22 Lessons</p>
              </figure>
              <figure className="flex">
                <ImUsers className="mt-0 text-[rgb(234,88,12)]" />
                <p className="ml-2 text-sm">80 Students</p>
              </figure>
            </div>
          </article>
        </div>
      </aside>
    </div>
  );
}

export default Course;
