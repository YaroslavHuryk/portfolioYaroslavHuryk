import BlockReview from "./BlockReview";

function ReviewsContainer() {
  return (
   <div className="flex items-center justify-between bg-white bg-opacity-5 w-full h-24 rounded-md p-4">
    <BlockReview bigText="5+" smallText="Experiences" />
    <div className="h-16 w-px bg-slate-400 border-0 rounded-md "></div>
    <BlockReview bigText="10+" smallText="Projects done" />
    <div className="h-16 w-px bg-slate-400 border-0 rounded-md "></div>
    <BlockReview bigText="2+" smallText="Happy Clients" />
    </div>
  );
}

export default ReviewsContainer