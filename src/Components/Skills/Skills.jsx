import React from 'react';
import { SkillsInfo } from '../../constants.js';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
   
    <section
      id="skills"
     
      className="py-24 px-[6vw] sm:px-[10vw] font-sans bg-gradient-to-b from-[#0f0f1b] via-[#141421] to-[#0f0f1b] clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
         A showcase of the technologies and tools I’ve worked with and continue to explore as part of my development journey.
        </p>
      </div>

      {/* Skill Cards */}
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
          {SkillsInfo.slice(0, 2).map((category) => (
            <Tilt
              key={category.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
              className="bg-[#101010] border border-[#8245ec] rounded-2xl p-6 sm:p-10 w-full lg:w-[48%] shadow-[0_0_15px_#8245ec33]"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center space-x-2 border border-gray-700 rounded-full py-2 px-4 bg-[#181818] hover:scale-105 transition duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Tilt>
          ))}
        </div>

        {/* Others - Single Centered Card */}
        <Tilt
          key={SkillsInfo[2].title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.02}
          transitionSpeed={1000}
          gyroscope={true}
          className="bg-[#101010] border border-[#8245ec] rounded-2xl p-6 sm:p-10 w-full lg:w-[60%] shadow-[0_0_15px_#8245ec33]"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6 text-center">
            {SkillsInfo[2].title}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {SkillsInfo[2].skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center space-x-2 border border-gray-700 rounded-full py-2 px-4 bg-[#181818] hover:scale-105 transition duration-300"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </Tilt>
      </div>
    </section>
   
  );
};

export default Skills;
