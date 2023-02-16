import React from "react";

import { FiCodesandbox} from 'react-icons/fi'

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaCodepen,
  FaInstagram,
  FaLaptop
} from 'react-icons/fa';
import { Link } from "react-scroll";
const SocialLinks = () => {
 
  return (
       <div className="block bg-stone-900">


        <div className="md:flex justify-center gap-12   sm:block mb-2 ">
          <div  className="flex gap-2 sm:mt-2 ">
          <div className="rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-orange-700 		 h-10	">C</div>
         <div className="text-orange-700 font-bold text-lg">+91-7355167733</div>
          </div>

          <div  className="flex gap-2 sm:mt-2">
          <div className="rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-orange-700 	font-bold	 h-10	"> @</div>
          <div className="text-orange-700 font-bold text-lg">parteekarora007@gmail.com</div>
          </div>

        </div>


       <div className="flex justify-center gap-10  bg-stone-900">
         <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-orange-700 		 h-10	"> <a href="https://twitter.com/">  <FaTwitter/></a></div>
         <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-orange-700 		 h-10	">  <a href="https://www.linkedin.com/in/parteek-arora/"><FaLinkedinIn/></a> </div>
         <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-orange-700 		 h-10	"> <a href="https://github.com/PART00007"> <FaGithub/></a>  </div>
         <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-orange-700 		 h-10	"> <a href="https://codepen.io"><FaCodepen/></a>  </div>
         <div className="border-2 rounded-full w-10 flex justify-center items-center border-hidden font-extrabold		text-2xl text-black bg-orange-700 		 h-10	"> <a href="https://codesandbox.io/"> <FiCodesandbox/></a> </div>


      
    </div>
    
    </div>
  );
};

export default SocialLinks;
