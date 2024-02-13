import { Link } from "@remix-run/react";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
    return (
        <div>
            <div className="h-[100vh] bg-[#998D85] w-32 hidden sm:flex justify-around items-center flex-col">
                <Link to="/contact" className="text-[#1D1D1B] hover:text-stone-800 rounded-md font-pl-italic  lowercase text-xl xl:text-2xl px-3 py-1.5 text-vertical">CONTACT</Link>
                <Link to="/project" className="text-[#1D1D1B] hover:text-stone-800 rounded-md font-pl-italic  lowercase text-xl xl:text-2xl px-3 py-1.5 text-vertical">PROJETS</Link>
                <Link to="/experience" className="text-[#1D1D1B] hover:text-stone-800 rounded-md font-pl-italic  lowercase text-xl xl:text-2xl px-3 py-1.5 text-vertical">EXPERIENCES</Link>
                <Link to="/about" className="text-[#1D1D1B] hover:text-stone-800 rounded-md font-pl-italic  lowercase text-xl xl:text-2xl px-3 py-1.5 text-vertical inline-block">À PROPOS</Link>
                <Link to="/" className="text-[#1D1D1B] hover:text-stone-800 rounded-md font-pl-italic  lowercase text-xl xl:text-2xl px-3 py-1.5 text-vertical">ACCUEIL</Link>
                {/* <div className="flex flex-col mx-3 gap-10 flex-1 justify-around">
                </div> */}
            </div>
            <div className="absolute right-10 top-10 sm:hidden flex flex-col items-end justify-start gap-3">
                <div className="h-12 w-12 text-2xl flex justify-center items-center bg-[#998D85] text--[#1D1D1B] rounded-md">
                    <HiMenuAlt3 />
                </div>
                <div className="flex flex-col-reverse justify-top items-end gap-2">
                    <Link to="/contact" className="text-[#1D1D1B] hover:text-stone-800 rounded-md font-pl-italic bg-[#998D85] lowercase text-2xl px-3 py-1.5">CONTACT</Link>
                    <Link to="/project" className="text-[#1D1D1B] hover:text-stone-800 rounded-md font-pl-italic bg-[#998D85] lowercase text-2xl px-3 py-1.5">PROJETS</Link>
                    <Link to="/experience" className="text-[#1D1D1B] hover:text-stone-800 rounded-md font-pl-italic bg-[#998D85] lowercase text-2xl px-3 py-1.5">EXPERIENCES</Link>
                    <Link to="/about" className="text-[#1D1D1B] hover:text-stone-800 rounded-md font-pl-italic bg-[#998D85] lowercase text-2xl px-3 py-1.5 inline-block">À PROPOS</Link>
                    <Link to="/" className="text-[#1D1D1B] hover:text-stone-800 rounded-md font-pl-italic bg-[#998D85] lowercase text-2xl px-3 py-1.5">ACCUEIL</Link>
            
                </div>
            </div>
        </div>
    );
}