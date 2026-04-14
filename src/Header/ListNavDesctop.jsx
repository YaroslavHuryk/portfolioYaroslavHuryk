import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
function ListNavDesctop({ isOpen, setOpen }) {
  const [isDesctop, setIsDesctop] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsDesctop(true);
    }
  }, [])
  return (
    <ul className={`lg:flex lg:flex-row flex flex-col items-center justify-around lg:gap-6 lg:justify-center text-2xl lg:max-h-6 w-full h-full font-medium md:gap-14 text-white text-opacity-60 lg:h-fit lg:w-fit gap-8`}>
      <li className='inline-block'>
        <Link to="/" onClick={() => isDesctop ? null : setOpen(false)}>Home</Link>
      </li>
      <li className='inline-block'>
        <Link to="/portfolio" onClick={() => isDesctop ? null : setOpen(false)}>Portfolio</Link>
      </li>
      <li className='inline-block'>
        <Link to="/contact" onClick={() => isDesctop ? null : setOpen(false)}>Contact</Link>
      </li>
      <li className='inline-block'>
        <Link to="/blog" onClick={() => isDesctop ? null : setOpen(false)}>Blog</Link>
      </li>
    </ul>
  )
}

export default ListNavDesctop;