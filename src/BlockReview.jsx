function BlockReview({ bigText, smallText }) {
  return (
    <div className="h-16 flex flex-col justify-between items-start ">
        <p className="text-xl md:text-2xl text-orange-600 font-extrabold">{bigText}</p>
        <p className="text-base md:text-xl text-gray-100 font-bold">{smallText}</p>
    </div>
  );
}

export default BlockReview;