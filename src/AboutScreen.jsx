import OrangeBtn from './OrangeBtn';
import Skills from './Skills';
import React from 'react';
import { handleCVDownload} from '../src/services/cvService';

function AboutScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-auto w-full bg-gray-10">
      <h2 className="text-2xl md:text-4xl font-bold text-opacity-90 text-white mb-6">About Me</h2>
      <div className='md:flex items-center'>
        <img  className="block h-auto md:w-2/5 rounded-full mb-8 md:mb-0 md:mr-24" src="/portret2.jpg" alt="My photo" />
        <div className='flex flex-col items-center'>
          <p className="text-white md:text-xl text-opacity-50 text-justify text-base font- mb-6">Hi, I'm Yaroslav. I am a Software Engineer specializing in Front-End and Web Development, with a strong focus on the JavaScript ecosystem.
            <br />
            <br />
            My engineering journey is backed by a solid academic foundation in Software Engineering and hands-on experience in building scalable web applications. Currently, I am developing real-world projects (including freelance and NDA work), turning complex business logic into clean, maintainable code and intuitive user interfaces.
            <br />
            <br />
            My background includes experience as a Computer Science Educator, which equipped me with exceptional communication skills, a methodical approach to problem-solving, and the ability to explain complex technical concepts simply and clearly. I don't just write code — I focus on the final product and user experience.
            <br/>
            <br />
            ⚡️ Core Tech Stack:
            • Frontend: JavaScript (ES6+), React.js, Next.js, HTML5, CSS3, Tailwind CSS
            • Backend & DB: Node.js, MongoDB
            • Tools & Practices: Git, GitHub, RESTful APIs, Responsive Design
            <br/>
            <br />
            I am highly adaptable, eager to contribute to a strong engineering team, and actively open to new opportunities in web development. Let's connect!</p>
          <OrangeBtn text="Download CV" imageUrl="/Download.svg" onClick={handleCVDownload} />
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default AboutScreen;
