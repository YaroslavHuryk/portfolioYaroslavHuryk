import { Link } from "react-router-dom";
import ListNavDesctop from "./ListNavDesctop";
import Logo from "./Logo";
import NavbarIconMobile from "./NavbarIconMobile";

function NavbarDesctop({isOpen, setOpen}) {
  return (
    <nav className={`lg:flex z-0 lg:flex-nowrap justify-between flex-col items-center lg:relative absolute lg:w-3/5 lg:p-0 p-4 w-screen h-screen top-0 left-0 md:h-6 lg:h-fit lg:bg-inherit bg-slate-800 opacity-90  ${isOpen ? '' :'left-full' } `}>
        <ListNavDesctop isOpen={isOpen} setOpen={setOpen} />
    </nav>
  );
}

export default NavbarDesctop;
