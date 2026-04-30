import OrangeBtn from "./OrangeBtn";
import ListOfContacts from "./ListOfContacts";
import GrayButton from "./GrayButton";
import ReviewsContainer from "./ReviewsContainer";
// import FirstScreen from "./FirstScreen";
// import AboutScreen from "./AboutScreen";
import { Suspense, lazy } from "react";
import Loader from "./Loader";

const FirstScreen = lazy(() => import("./FirstScreen"));
const AboutScreen = lazy(() => import("./AboutScreen"));

function Home () {
  return (
    <div className="w-full pt-32 pl-[23px] pr-[23px] md:pl-20 md:pr-20 md:pt-24">    
      <Suspense fallback={<Loader />}>
        <FirstScreen />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <AboutScreen />
      </Suspense>
    </div>
  )
}

export default Home;
