import Logo from "./Logo";
import NavbarDesctop from "./NavbarDesctop";
import NavbarIconMobile from "./NavbarIconMobile";
import OrangeBtn from "./../OrangeBtn";
import { useState, useEffect } from "react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(true);
      } 
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className='h-[70px] md:h-24 w-full mt-0 pl-[23px] pr-[23px] pb-1 fixed md:pt-11 md:pr-20 md:pl-20 md:pb-3 flex items-center justify-between bg-[#121212] text-white'>
      {/* <NavbarIconMobile onClick={()=>{setMobileMenuOpen(!isMobileMenuOpen)}} isOpen={isMobileMenuOpen} /> */}
      {/* <Logo imgUrl="/public/logo1.png" /> */}
      <NavbarIconMobile onClick={()=>{setMobileMenuOpen(!isMobileMenuOpen)}} isOpen={isMobileMenuOpen} />
      <Logo imgUrl="/logo1.png" />
      <NavbarDesctop isOpen={isMobileMenuOpen} setOpen={setMobileMenuOpen} />
      <OrangeBtn text="Hire me" url="#" imageUrl="#" />
    </header>
  );
}

export default Header;