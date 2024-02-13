import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Layout from "~/layout/layout";

export const meta: MetaFunction = () => {
  return [
    { title: "dadvink | project" },
    { name: "description", content: "Welcome !" },
  ];
};

export default function Project() {
  return (
    <Layout>
      <div className="w-[90%] h-[80%] mx-3 my-2 flex gap-10 items-end">
          <div >
            <div className="overflow-hidden rounded-md shadow-xl w-[40rem] h-[40rem] bg-black">
                {/* <img className=" min-h-[50%] min-w-[50%] object-cover object-center" src="/img/pp.jpeg" alt="img"/> */}
            </div>
          </div>
          <div className="flex flex-col justify-start gap-2 flex-1 h-full">
            <span className="font-pl-bold text-5xl text-[#998D85]">projets</span>
            <div className="h-10"></div>
            <div className="h-1 bg-[#998D85] rounded"></div>
            <div className="overflow-y-scroll scroll-style pr-4">
                {[...Array(10)].map((index) => (
                    <Link to="/project/single" className="flex flex-col" key={index}>
                        <div className="flex justify-between items-center mx-5">
                            <span className="font-pl-bold text-2xl text-[#79726C]">Nom du projet</span>
                            <span className="font-pl-bold text-2xl text-[#79726C]">07/02/2025</span>
                        </div>
                        <p className="font-pl text-2xl text-[#79726C] ml-7 mx-5">tag - tag </p>
                        <div className="h-0.5 my-1 bg-[#998D85] rounded"></div>
                    </Link>
                ))}
            </div>

          </div>
      </div>
    </Layout>
  );
}
