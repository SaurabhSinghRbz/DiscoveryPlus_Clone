import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import chakra from "../assets/chakra.png"
import mongo from "../assets/mongodb.png"
import node from "../assets/node.png"


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
   
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    {
      id: 13,
      src: chakra,
      title: "Chakra UI",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 15,
      src: node,
      title: "NodeJS",
      style: "shadow-green-600",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-stone-900	 w-full max-h-fit			"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-orange-600	 text-4xl font-bold inline border-b-4 border-gray-500">
            Skills
          </p>
          {/* <p className="py-6 text-lg	font-medium	text-neutral-400">These are the technologies I've worked with and used them in my projects.</p> */}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center mt-11 py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
