import { Link } from "react-router-dom";
function OrangeBtn(props) {
  return (
    <Link className='bg-[#FD6F00] flex md:text-xl items-center justify-center w-fit pl-5 pr-5 pt-2 pb-2 lg:pt-3 lg:pb-3 lg:pr-10 lg:pl-10 rounded-md text-base text-white font-semibold cursor-pointer hover:bg-amber-500 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-amber-500' to={props.url} onClick={props.onClick}>
      <img src={props.imageUrl} alt="" className="inline-block mr-2" />
      {props.text}
    </Link>
  );
}

export default OrangeBtn;