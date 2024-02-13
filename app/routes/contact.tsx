import type { MetaFunction } from "@remix-run/node";
import Layout from "~/layout/layout";
import { FaInstagram } from "react-icons/fa6";
// import { FaArrowUpRightFromSquare, FaInstagram } from "react-icons/fa6";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "dadvink | contact" },
    { name: "description", content: "Welcome !" },
  ];
};

export default function Contact() {
  return (
    <Layout>
      <div className="w-[75%] h-[75%] mx-3 my-2 flex flex-col justify-start gap-10">
          <span className="font-pl-bold text-3xl xl:text-5xl text-[#998D85]">contact</span>
          <div className="w-[50%] h-1 bg-[#998D85] rounded"></div>
          <div></div>
          <p className="font-pl-bold text-xl xl:text-4xl text-[#79726C]">+225 01 40 54 41 97 / 07 10 00 77 46</p>
          <p className="font-pl-bold text-xl xl:text-4xl text-[#79726C]">davidbryster21@gmail.com</p>
          <Link to="/" className="font-pl-bold text-xl xl:text-4xl text-[#79726C] flex items-center gap-3"><FaInstagram /> <span>d.bryst</span> </Link>
        
      </div>
    </Layout>
  );
}
