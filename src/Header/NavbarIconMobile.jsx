function NavbarIconMobile({isOpen, onClick}) {
    return (
      <button onClick={onClick} className={`flex z-10 flex-col lg:hidden h-[24px] justify-around items-left ${isOpen ? '' : 'items-center justify-center'}`} aria-label="Toggle menu">
        <span className={`block w-[18px] border rounded-lg border-gray-500 ${isOpen ? 'w-6 absolute rotate-45' : ''}`}></span>
        <span className={`block w-[11px] border rounded-lg border-gray-500 ${isOpen ? 'hidden' : 'block'}`}></span>
        <span className={`block w-[18px] border rounded-lg border-gray-500 ${isOpen ? 'w-6 -rotate-45' : ''}`}></span>
      </button>
    )
}

export default NavbarIconMobile;