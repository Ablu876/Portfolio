import React from 'react';

function Skills() {
  return (
    <>
    <div
      id="skills" // Added id for smooth scrolling
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
    >
      <h1 className="text-4xl font-bold text-left mb-12">Skills</h1> {/* Title aligned to the left */}

      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">

        <div className="md:w-1/2 space-y-6 text-justify">
          <h2 className="text-2xl font-semibold">🚀 Programming & Scripting</h2>
          <ul className="list-disc list-inside">
            <li><strong>Python:</strong> Proficient in Python for Data Science, Machine Learning, and Automation tasks.</li>
            <li><strong>R:</strong> Experienced in statistical analysis and predictive modeling using R.</li>
            <li><strong>HTML, CSS, JavaScript:</strong> Skilled in front-end development for building responsive web pages.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">🌐 Web Development</h2>
          <ul className="list-disc list-inside">
            <li><strong>HTML, CSS, JavaScript:</strong> Proficient in creating responsive, user-friendly web pages.</li>
            <li><strong>GitHub:</strong> Experience with version control to manage code and collaborate on projects.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">🗄️ Database Skills</h2>
          <ul className="list-disc list-inside">
            <li><strong>SQL:</strong> Skilled in database design, querying, and data manipulation.</li>
            <li><strong>MySQL:</strong> Experience working with MySQL for relational database management.</li>
          </ul>
        </div>

        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold">🤖 Data Science & Machine Learning</h2>
          <ul className="list-disc list-inside">
            <li><strong>Machine Learning:</strong> Expertise in Regression, Classification, Clustering, and Neural Networks.</li>
            <li><strong>Data Analysis:</strong> Strong command of data manipulation using Pandas, NumPy, and SciPy.</li>
            <li><strong>Data Visualization:</strong> Ability to create insightful visualizations using Matplotlib, Seaborn, and Tableau.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">☁️ Cloud Computing</h2>
          <ul className="list-disc list-inside">
            <li><strong>AWS:</strong> Experience with Amazon Web Services for cloud computing and deployment.</li>
            <li><strong>Linux:</strong> Skilled in Linux for server management, shell scripting, and command-line tools.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">🎨 UI/UX Design</h2>
          <ul className="list-disc list-inside">
            <li><strong>UI Design Principles:</strong> Knowledge of wireframing, prototyping, and creating user flows for better user experience.</li>
            <li><strong>UX Research & Testing:</strong> Ability to conduct usability testing and analyze user behavior for better design decisions.</li>
            <li><strong>Design Tools:</strong> Experience with Figma and Adobe XD.</li> {/* Updated to match usage */}
          </ul>
        </div>
      </div>
    </div>
    <hr />
    </>
  );
}

export default Skills;
