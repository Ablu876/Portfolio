import React from 'react'

import image from "../../public/My-Photo.jpg";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl items-center">
              <h1>Hello, I'm a</h1>
                <div className="whitespace-nowrap">
                <ReactTyped
                 className="text-red-700 font-bold text-xl md:text-3xl" // Decreased font size for the animated text //
                  strings={["Data Scientist", "Developer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}/>
                  </div>
                  </div>

            <br />
            <p className="text-sm md:text-md text-justify">
            I am skilled in Python, R-Language, and SQL for data analysis and machine learning,
              with expertise in data visualization using Tableau and Matplotlib. 
              I also have experience in web development with HTML and CSS, 
              along with knowledge of AWS and GitHub for version control.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/shaik-ablu-hussain-17b052189" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Ablu876" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/Shaik143256/" target="_blank" rel="noopener noreferrer">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaFigma className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiMysql className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaAws className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={image}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
