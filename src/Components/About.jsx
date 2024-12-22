import React from "react";

function About() {
  return (
    <>
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-justify">
        Hello, I am Shaik Ablu Hussain, an aspiring <span className="whitespace-nowrap">Data Scientist</span> and Web Developer
         skilled in Python, R, machine learning, HTML, and CSS. I enjoy solving problems through 
         data analysis, visualization, and creating user-friendly web solutions, with experience in 
         customer analytics, predictive modeling, and web technologies.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education 
        </h1>
        <span className="text-justify">
          [Bachelor of Technology],[Mechanical Engineerig], [Mother Theresa Institute of Engineering and Technology], [2023]
          <br /> 
          [Intermediate], [MPC], [Space Junior Collge], [2019]
        </span>
        <br />
        <br />
        <div id="certificates-section" className="my-8">
          <h2 className="text-green-600 font-semibold text-2xl">Certificates</h2>
          <ul className="list-none">
            {[ 
              { 
                title: "Data Science Course Completion Certificate",
                provider: " From-ExceLR Solutions",
                description:"Successfully completed a comprehensive course in data science, covering essential tools and techniques for data analysis and predictive modeling. ",
                link: "https://drive.google.com/file/d/1inH9Skkc9023W0acZmwj9jqKT1ntC84u/view?usp=drive_link"
              },
              {
                title: "Data Science Internship Certificate",
                provider: " From-AI Variant",
                description: "Awarded for contributing to projects like Customer Personality Analysis and Bankruptcy Prevention, utilizing Python, Pandas, and machine learning.",
                link: "https://drive.google.com/file/d/11h-ZN1Bu7lTy3Ft9ONk-YF9mnigZv7IR/view?usp=drive_link"
              },
              {
                title: "Certificate of Python for Data Science, AI & Development",
                provider: "From-IBM via Coursera",
                description: "Gained skills in Python programming for data science, AI, and machine learning, including data visualization and analysis with libraries like Pandas and Matplotlib.",
                link: "https://drive.google.com/file/d/1Df_zyZzcySfdbA68iOmB5OuEoq4zuzqx/view?usp=drive_link"
              },
              {
                title: "Certificate of Machine Learning with Python",
                provider: "From-IBM Developer Skill Network",
                description: "Completed training in machine learning algorithms, including regression, classification, and clustering using Python libraries.",
                link: "https://drive.google.com/file/d/1ey1YZTDdShhtimT5o4KK_r4RZo-N755c/view?usp=drive_link"
              },
              {
                title: "Web Development Course Completion Certificate",
                provider: "From-Internshala",
                description: "Successfully completed a course on web development, covering HTML, CSS, JavaScript, and responsive design principles.",
                link: "https://drive.google.com/file/d/1aEXQzZfaaBe-K8mZyBtbCk15Caqsqutt/view?usp=drive_link"
              }
            ].map((certificate, index) => (
              <li key={index} className="my-5">
                <strong className="text-lg">{certificate.title}</strong> - {certificate.provider} <br />
                <p className="text-base">{certificate.description}</p>
                <div className="text-center mt-2">
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition text-sm"
                  >
                    View Certificate
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p className="text-justify">
        My mission is to combine data science and web development skills to
        create impactful solutions. I aim to uncover insights with machine learning and
        analytics while building user-friendly, responsive web applications that solve 
        real-world problems and drive success.
        </p>
      </div>
    </div>
    <hr />
    </>
  );
}

export default About;
