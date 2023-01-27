import React from "react";
import github from "../assets/github.png";
import postman from "../assets/postman.png";
import Git from "../assets/Git-Icon.png";
import Netlify from "../assets/netlify.png"
import heroku from "../assets/heroku.png"
import vscode from "../assets/vscode.png"


const Tools = () => {
  const techs = [
    {
      id: 1,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Git,
      title: "Git",
      style: "shadow-red-500",
    },
    {
      id: 3,
      src: Netlify,
      title: "Netlify",
      style: "shadow-blue-500",
    },
   
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: heroku,
      title: "heroku",
      style: "shadow-purple-400",
    },
    
    {
      id: 12,
      src: vscode,
      title: "vscode",
      style: "shadow-blue-500",
    },
   
  ];

  return (
    <div
      name="Tools"
      className="bg-stone-900	 w-full max-h-fit			"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-orange-600	 text-4xl font-bold inline border-b-4 border-gray-500">
            Tools
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

export default Tools;
