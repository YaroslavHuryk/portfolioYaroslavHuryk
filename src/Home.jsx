import OrangeBtn from "./OrangeBtn";
import ListOfContacts from "./ListOfContacts";
import GrayButton from "./GrayButton";
import ReviewsContainer from "./ReviewsContainer";
import FirstScreen from "./FirstScreen";
import AboutScreen from "./AboutScreen";

function Home () {
  return (
    <div className="w-full pt-32 pl-[23px] pr-[23px] md:pl-20 md:pr-20 md:pt-24">    
      <FirstScreen />
      <AboutScreen />
    </div>
  )
}

export default Home;
