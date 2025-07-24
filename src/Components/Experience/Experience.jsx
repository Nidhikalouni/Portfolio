import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
     
      className="py-24 pb-30 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
   
>
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A glimpse into my professional journey — highlighting my internship experience where I contributed, learned, and grew as a developer.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col items-center gap-12">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="w-full max-w-2xl bg-[#101010] border border-[#8245ec] rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-6 sm:p-5 transition-transform hover:scale-[1.02]"
          

          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Logo */}
              <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0 flex items-center justify-center">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {experience.role}
                </h3>
                <h4 className="text-md sm:text-sm text-gray-300">
                  {experience.company}
                </h4>
                <p className="text-sm text-gray-500">{experience.date}</p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-400">{experience.desc}</p>

            {/* Skills */}
            <div className="mt-6">
              <h5 className="font-medium text-white">Skills:</h5>
              <ul className="flex flex-wrap mt-2">
                {experience.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;


