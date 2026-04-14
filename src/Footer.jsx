import ListNavDesctop from "./Header/ListNavDesctop";
import Logo from "./Header/Logo";
import ListOfContacts from "./ListOfContacts";

function Footer(){
    return (
        <div className="w-full h-fit text-white text-opacity-60 flex flex-col items-center justify-between bg-white bg-opacity-5 pb-6 pt-10">
            <Logo imgUrl="/public/logo1.png" />
            <ListNavDesctop />
            <div className="w-3/4 lg:w-2/4 p-2 self-center flex justify-center">
                <ListOfContacts />
            </div>
            <div className="flex items-center gap-1 font-bold text-base"><img src="./public/mail.svg" alt="Email" /><p>yaroslavspace10@gmail.com</p></div>
            <div className="flex items-center gap-1 font-bold text-base"><img src="./public/Vector.svg" alt="Phone" /><p>+380 670 77 44 25</p></div>
            <div className="bg-white bg-opacity-60 h-px w-4/5 my-2"></div>
            <p className="text-white text-opacity-60 font-bold text-sm">Designed by @mahmood.fazile UI/UX designer</p>
        </div>
    )
}

export default Footer;