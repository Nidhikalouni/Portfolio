// import React from 'react'
// import { education } from '../../constants'
// const Education = () => {
//   return (
//     <section
//     id='education'
//     className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3'>

//     {/* Section Title */}
//     <div className="text-center mb-16">
//       <h2 className='text-4xl font-bold text-white'>EDUCATION</h2>
//       <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//       <p className="text-gray-400 mt-4 text-lg font-semibold">  My education has been a journey of continuos learning and development. Here are the details of my academic background</p>
//     </div>

//     {/* Education Timeline */}
//      <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Education Entries */}
//         {education.map((edu, index) => (
//           <div
//             key={edu.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
//             }`}
//           >
//             {/* Timeline Circle */}
//             <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
//               <img
//                 src={edu.img}
//                 alt={edu.school}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>

//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for image and text */}
//               <div className="flex items-center space-x-6">
//                 {/* School Logo/Image */}
//                 <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Degree, School Name, and Date */}
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {edu.school}
//                     </h4>
//                   </div>
//                   {/* Date at the bottom */}
//                   <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                 </div>
//               </div>

//               <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//               <p className="mt-4 text-gray-400">{edu.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Education

// import React from 'react'
// import { education } from '../../constants'

// const Education = () => {
//   return (
//     <section
//       id="education"
//       className="py-24 px-[6vw] md:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My education has been a journey of continuous learning and development. Here's a brief look at my academic background.
//         </p>
//       </div>

//       {/* Timeline Container */}
//       <div className="relative">
//         {/* Vertical Timeline Line */}
//         <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-white h-full z-0"></div>

//         {/* Timeline Items */}
//         {education.map((edu, index) => {
//           const isLeft = index % 2 === 0;

//           return (
//             <div
//               key={edu.id}
//               className="relative mb-20 flex flex-col md:flex-row items-center"
//             >
//               {/* Timeline Dot */}
//               <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-20">
//                 <div className="w-16 h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full flex items-center justify-center">
//                   <img
//                     src={edu.img}
//                     alt={edu.school}
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 </div>
//               </div>

//               {/* Connecting Line to Dot (for large screens) */}
//               <div
//                 className={`hidden md:block absolute top-8 w-[40px] h-[2px] bg-white z-10 ${
//                   isLeft ? "right-1/2 mr-8" : "left-1/2 ml-8"
//                 }`}
//               ></div>

//               {/* Education Card */}
//               <div
//                 className={`w-full md:w-1/2 p-6 md:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md transition-transform duration-300 hover:scale-105 z-10 ${
//                   isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
//                 }`}
//               >
//                 <div className="flex items-start space-x-4">
//                   {/* School Logo */}
//                   <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
//                     <img
//                       src={edu.img}
//                       alt={edu.school}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Degree & Info */}
//                   <div>
//                     <h3 className="text-xl font-semibold text-white">
//                       {edu.degree}
//                     </h3>
//                     <h4 className="text-sm text-gray-300">{edu.school}</h4>
//                     <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
//                   </div>
//                 </div>

//                 <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
//                 <p className="mt-2 text-gray-400">{edu.desc}</p>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default Education


import React from 'react'
import { education } from '../../constants'

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] md:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of continuous learning and development. Here's a brief look at my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Timeline Line for all screen sizes */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-white h-full z-0"></div>

        {/* Timeline Items */}
        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className="relative mb-20 flex flex-col md:flex-row items-center"
            >
              {/* Timeline Dot (visible for all screens now) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full flex items-center justify-center">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Connecting Line to Dot (only for medium and up) */}
              <div
                className={`hidden md:block absolute top-8 w-[40px] h-[2px] bg-white z-10 ${
                  isLeft ? "right-1/2 mr-8" : "left-1/2 ml-8"
                }`}
              ></div>

              {/* Education Card */}
              <div
                className={`w-full md:w-1/2 p-6 md:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md transition-transform duration-300 hover:scale-105 z-10 mt-12 md:mt-0 ${
                  isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="flex items-start space-x-4">
                  {/* School Logo */}
                  <div className="w-20 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Degree & Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Education
