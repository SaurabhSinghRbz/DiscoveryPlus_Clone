import React from "react";
import pic from "../assets/about/eduOrange.svg"

const About = () => {
  return (
    <div          
      name="about"
      className="w-full max-h-auto mb-20 mt-20	bg-black	flex-col text-white about"
    >          
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-orange-600 text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
           {/* gig img */}
        <div className="md:flex justify-center gap-20  sm:block ">
        <img width="380px"  src={pic} />

        <div className="p-10 border-2 shadow-2xl shadow-orange-500/100 bg-black">
        <p className="text-2xl font-medium">
        Aspiring MERN Developer with the ability to collaborate effectively and passionately. Enjoy working closely with team members. Proficient in React and Redux.
        </p>      
    
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
