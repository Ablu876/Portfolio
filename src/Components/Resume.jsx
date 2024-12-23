import React from 'react';

function Resume() {
  return (
    <div
      id="resume" // Added id for smooth scrolling
      name="Resume"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
    >
      <h1 className="text-4xl font-bold text-left mb-12">Resume</h1> {/* Title updated to "Add Resume" */}

      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Resume Description Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">📄 About Me</h2>
          <p className='text-justify'>
            I am a recent graduate with a strong academic foundation in Mechanical Engineering and a keen interest in Data Science. 
            Skilled in Python, R-Porgramming Language, and Machine Learning, I have completed academic projects focused on data analysis and 
            visualization, demonstrating my ability to uncover insights and solve real-world problems. I am eager to contribute 
            to a dynamic organization, grow my skills, and make a meaningful impact as I embark on my professional journey.
          </p>
        </div>

        {/* View Resume Section */}
        <div className="md:w-1/2 space-y-6 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold mb-4">📑 My Resume</h2>
          
          {/* View Resume Button */}
          <button
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1AGXzz3oMp9Dq4xhDj5gQYIvzlp4w9gxY/view?usp=drive_link',
                '_blank'
              )
            }
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:scale-105 transform transition duration-300"
            aria-label="View my resume"
          >
            View Resume
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Click the button above to view my resume or read on to explore highlights of my skills and experiences.
          </p>
        </div>
      </div>

      {/* Horizontal Line with Spacing */}
      <hr className="mt-16 border-t-2 border-gray-300" /> {/* Adds margin and a visible line */}
    </div>
  );
}

export default Resume;
