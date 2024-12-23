import React from "react";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: "/Bankruptcy-Prevention.png",
      name: "Bankruptcy Prevention",
      description: "A system to predict and prevent potential bankruptcies using advanced analytics.",
      github: "https://github.com/Ablu876/Bankruptcy-Prevention",
    },
    {
      id: 2,
      logo: "/Customer-Personality-Analysis.png",
      name: "Customer Personality Analysis",
      description: "Analyzes customer behavior to enhance targeted marketing strategies.",
      github: "https://github.com/Ablu876/Customer-Personality-Analysis-",
    },
    {
      id: 3,
      logo: "/E-Commers Store.jpg",
      name: "E-Commerce Store",
      description: "A fully functional e-commerce store with product management and cart features.",
      github: "https://github.com/Ablu876/E-Commerce-Stor",
    },
    {
      id: 4,
      logo: "/PowerBi Dashbord.jpg",
      name: "PowerBi Dashboard",
      description: "Interactive Power BI dashboards for visualizing business data and metrics.",
      github: "https://github.com/Ablu876/madhav_store_dashboard",
    },
  ];

  return (
    <div
      id="projects" // Added id for smooth scrolling
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-6"
    >
      {/* Heading Section */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardItem.map(({ id, logo, name, description, github }) => (
          <div
            key={id}
            className="w-full max-w-[300px] mx-auto border-[2px] rounded-lg shadow-lg p-4 flex flex-col items-center hover:scale-105 duration-300"
          >
            {/* Project Image */}
            <img
              src={logo}
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] p-1 rounded-full border-[2px] object-cover"
              alt={name}
            />
            {/* Project Name */}
            <div className="mt-3 text-center">
              <h2 className="font-bold text-lg md:text-xl mb-2">{name}</h2>
              <p className="text-gray-600 text-sm text-center">
                {description}
              </p>
            </div>
            {/* Source Code Button */}
            <div className="mt-auto flex justify-center">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded mt-3"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
