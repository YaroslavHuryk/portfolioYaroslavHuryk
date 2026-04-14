function OrangeBtn(props) {
  return (
    <a className='bg-[#FD6F00] flex md:text-xl items-center justify-center w-fit pl-5 pr-5 pt-2 pb-2 lg:pt-3 lg:pb-3 lg:pr-10 lg:pl-10 rounded-md text-base text-white font-semibold' href={props.url}>
      <img src={props.imageUrl} alt="" className="inline-block mr-2" />
      {props.text}
    </a>
  );
}

export default OrangeBtn;