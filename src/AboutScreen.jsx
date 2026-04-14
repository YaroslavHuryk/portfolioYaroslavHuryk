import OrangeBtn from './OrangeBtn';
import Skills from './Skills';

function AboutScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-auto w-full bg-gray-10">
      <h2 className="text-2xl md:text-4xl font-bold text-opacity-90 text-white mb-6">About Me</h2>
      <div className='md:flex items-center'>
        <img  className="block h-auto md:w-2/5 rounded-full mb-8 md:mb-0 md:mr-24" src="/public/portret2.jpg" alt="My photo" />
        <div className='flex flex-col items-center'>
          <p className="text-white md:text-xl text-opacity-25 text-justify text-base font- mb-6">I am a fronted developer. I am studying at the university now. I like to create Web sites or Web applications. I believe that I can make our world better by offering to solve different people's problems and making their life easier by creating the best websites as I am able to do.</p>
          <OrangeBtn text="Download CV" imageUrl="/public/Download.svg" />
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default AboutScreen;
