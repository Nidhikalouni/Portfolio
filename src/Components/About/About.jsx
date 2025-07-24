import React from 'react'

import { Typewriter } from 'react-simple-typewriter'

import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
   <section
   id='about'
   className='py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-12 md:mt-16 lg:mt-18'
   >
    <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-16 lg:gap-20'>
      {/* Left Side */}
      <div className='md:w-3/5 lg:w-2/3 text-center md:text-left mt-8 md:mt-0'>
      {/* Greeting */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
        Hi, I am
      </h1>
      {/* Name */}
      <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
        Nidhi Kalouni
      </h2>
      {/* Skills Heading with Typing Effect */}

    

<h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
  <span className='text-white'>I am a </span>
  
    <Typewriter
      words={[
        'Creative Coder',
        'Software Developer',
        'Fullstack Developer',
        'Tech Enthusiast',
      ]}
      loop={0}
      cursor
      cursorStyle='|'
      typeSpeed={100}
      deleteSpeed={50}
      delaySpeed={2000}
    />
  
</h3>


      {/* About Me Paragraph */}
      <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
        I'm, a passionate Fullstack Developer with a love for crafting clean, functional, and user-friendly web applications. With hands-on experience in Java, React, and the MERN stack, 
        I enjoy turning complex problems into simple, elegant solutions. Whether it's designing responsive UIs or building secure backend systems, I bring creativity, adaptability, and a continuous 
        learning mindset to every project. My goal is to create meaningful digital experiences that not only work flawlessly — but feel intuitive and engaging.
      </p>

       <a
            href="https://drive.google.com/file/d/1g4n6stOR-wnk6OFDba4UO_54GkLUTQfl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Check Resume
          </a>

      </div>

      {/* Right Side */}
       <div className="md:w-2/5 lg:w-1/3 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] lg:w-[24rem] lg:h-[24rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Nidhi Kalouni"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
    </div>
    

   </section>
  )
}

export default About
