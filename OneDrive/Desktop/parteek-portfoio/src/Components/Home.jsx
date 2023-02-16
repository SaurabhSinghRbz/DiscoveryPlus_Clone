import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import ayesha from "../assets/profile-img.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import resume from "../assets/Parteek_Kumar_Resume (2).pdf"

const Home = () => (
  <div
    name="home"
    className="h-screen  w-full bg-stone-900 home"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center max-h-full px-4 md:flex-row">
      <div className="small-screen hidden mt-8">
        <img
          src={ayesha}
          alt="profile"
          className="border-orange-600 w-92  rounded-full" />
      </div>
      <div className="flex flex-col justify-center h-auto mt-36">
       <div className="">
       <h2 className="text-4xl sm:text-7xl font-bold text-white">
         Hello, I'm <span className="text-orange-600" >Parteek Kumar</span>
        </h2>
        <div className="mt-4 text-4xl text-white font-bold ">Full Stack Web Developer</div>
        <p className="font-medium	text-2xl text-gray-400 py-4 max-w-md">
          I love to build websites using the latest front-end technologies and full fledged APIs.
        </p>
      

      
        <a
          href={resume}
          className="flex justify-between items-center w-full text-white"
          download={true}
          target="_blank"
          rel="noreferrer"
        >
        <div className="group text-white w-fit px-6 py-3 my-2 flex items-center gap-2 rounded-md bg-gradient-to-b from-orange-600 to-orange-700 cursor-pointer"> <span className="font-medium text-xl" >Resume</span> <BsFillPersonLinesFill className="text-2xl" /></div>
        </a>
        </div>
      </div>
     
        <div className="big-screen w-8/12  mt-12 shadow-orange-600 ">
          <img 
            src={ayesha}
            alt="profile"
            className="p-10 w-100 h-90 rounded-full"
          />
        </div>
    </div>
  </div>
);

export default Home;
