import React from "react";

function Skills() {
  return (
    <>
      <div
        id="Skills"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
        aria-label="Skills Section"
      >
        <h1 className="text-4xl font-medium text-left mb-12">Skills</h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column */}
          <div className="md:w-1/2 space-y-8 text-justify">
            <section aria-labelledby="programming-skills">
              <div className="bg-white p-6 rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <h2 id="programming-skills" className="text-2xl font-medium mb-4">
                  🚀 Programming & Scripting
                </h2>
                <ul
                  role="list"
                  aria-describedby="programming-skills"
                  className="list-disc list-inside opacity-80"
                >
                  <li>
                    <span className="font-medium">Python:</span> Proficient in
                    Data Science, Machine Learning, and Automation.
                  </li>
                  <li>
                    <span className="font-medium">R:</span> Experienced in
                    statistical analysis and predictive modeling.
                  </li>
                  <li>
                    <span className="font-medium">
                      HTML, CSS, JavaScript:
                    </span>{" "}
                    Skilled in building responsive web pages.
                  </li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="web-development">
              <div className="bg-white p-6 rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <h2 id="web-development" className="text-2xl font-medium mb-4">
                  🌐 Web Development
                </h2>
                <ul
                  role="list"
                  aria-describedby="web-development"
                  className="list-disc list-inside opacity-80"
                >
                  <li>
                    <span className="font-medium">Frontend:</span> Expertise in
                    creating user-friendly, responsive web interfaces.
                  </li>
                  <li>
                    <span className="font-medium">Version Control:</span>{" "}
                    Experienced with Git and GitHub for collaboration.
                  </li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="database-skills">
              <div className="bg-white p-6 rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <h2 id="database-skills" className="text-2xl font-medium mb-4">
                  🗄️ Database Skills
                </h2>
                <ul
                  role="list"
                  aria-describedby="database-skills"
                  className="list-disc list-inside opacity-80"
                >
                  <li>
                    <span className="font-medium">SQL & MySQL:</span> Skilled in
                    designing and managing relational databases.
                  </li>
                  <li>
                    <span className="font-medium">PostgreSQL:</span> Experience
                    in working with advanced SQL queries, indexing, and
                    performance optimization.
                  </li>
                  <br />
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 space-y-8">
            <section aria-labelledby="data-science">
              <div className="bg-white p-6 rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <h2 id="data-science" className="text-2xl font-medium mb-4">
                  🤖 Data Science & Machine Learning
                </h2>
                <ul
                  role="list"
                  aria-describedby="data-science"
                  className="list-disc list-inside opacity-80"
                >
                  <li>
                    <span className="font-medium">Machine Learning:</span>{" "}
                    Proficient in Regression, Classification, Clustering, and
                    Neural Networks.
                  </li>
                  <li>
                    <span className="font-medium">Data Analysis:</span> Expertise
                    in Pandas, NumPy, and SciPy for data manipulation.
                  </li>
                  <li>
                    <span className="font-medium">Visualization:</span> Skilled in
                    creating visual insights using Matplotlib, Seaborn, and
                    Tableau.
                  </li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="cloud-computing">
              <div className="bg-white p-6 rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <h2 id="cloud-computing" className="text-2xl font-medium mb-4">
                  ☁️ Cloud Computing
                </h2>
                <ul
                  role="list"
                  aria-describedby="cloud-computing"
                  className="list-disc list-inside opacity-80"
                >
                  <li>
                    <span className="font-medium">AWS:</span> Experience with
                    cloud computing and deployments.
                  </li>
                  <li>
                    <span className="font-medium">Linux:</span> Proficient in
                    server management and shell scripting.
                  </li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="ui-ux">
              <div className="bg-white p-6 rounded-lg shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <h2 id="ui-ux" className="text-2xl font-medium mb-4">
                  🎨 UI/UX Design
                </h2>
                <ul
                  role="list"
                  aria-describedby="ui-ux"
                  className="list-disc list-inside opacity-80"
                >
                  <li>
                    <span className="font-medium">Design Principles:</span>{" "}
                    Expertise in wireframing and prototyping for user-centric
                    designs.
                  </li>
                  <li>
                    <span className="font-medium">Research & Testing:</span>{" "}
                    Conducting usability tests and analyzing user behavior.
                  </li>
                  <li>
                    <span className="font-medium">Tools:</span> Proficient in
                    Figma and Adobe XD.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Skills;
