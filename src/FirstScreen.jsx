import OrangeBtn from "./OrangeBtn";
import ListOfContacts from "./ListOfContacts";
import GrayButton from "./GrayButton";
import ReviewsContainer from "./ReviewsContainer";

function FirstScreen() {
  return (
    <div className="w-full flex items-center justify-between md:h-[781px]  ">
      <div className="bg-[url('/public/Vector.png')] h-[430px] md:h-3/5 mb-6 w-full md:w-2/5 bg-[#121212] text-center flex flex-col items-center md:items-start justify-between">
        <p className="font-semibold font-sans md:text-2xl text-base text-slate-400">Hi, I am</p>
        <h2 className="font-bold font-sans text-xl md:text-2xl text-slate-400">Huryk Yaroslav</h2>
        <h1 className="font-black font-sans text-5xl md:text-7xl bg-gradient-to-tr from-orange-700 via-orange-500 to-orange-700 bg-clip-text text-transparent">Web-developer</h1>
          <ListOfContacts />
          <div className="flex justify-between mt-4 w-4/5 md:w-3/4 ml-auto mr-auto md:mr-0 md:ml-0">
            <OrangeBtn text="Hire me" url="/contact" imageUrl="#" />
            <GrayButton text="Download CV" onClick={() => alert('CV Downloaded')} />
          </div>
          <ReviewsContainer />
      </div>
      <img  className="hidden md:block md:h-auto md:w-2/4 rounded-full mb-8 md:mb-0" src="/portret.jpg" alt="My photo" />
    </div>
  );
}

export default FirstScreen;