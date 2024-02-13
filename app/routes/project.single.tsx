import type { MetaFunction } from "@remix-run/node";
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
      <div className="w-[75%] h-[75%] mx-3 my-2 flex flex-col gap-10 items-center shadow-2xl overflow-y-scroll">
          <div className="w-[75%] h-[30rem] rounded">
            <div className="overflow-hidden rounded-md shadow-xl h-full w-full bg-black">
                {/* <img className=" min-h-[50%] min-w-[50%] object-cover object-center" src="/img/pp.jpeg" alt="img"/> */}
            </div>
          </div>
          <div className="w-[75%] h-[30rem] flex flex-col gap-5">
            <div className="flex justify-between items-center mx-5">
                <span className="font-pl-bold text-3xl text-[#79726C]">Nom du projet</span>
                <span className="font-pl-bold text-3xl text-[#79726C]">Type de projet</span>
            </div>
            <div className="h-0.5 my-2 bg-[#998D85] rounded"></div>
            <div className="flex justify-start gap-3 items-center mx-5">
                <span className="font-pl-bold text-1xl text-[#79726C]">Tag : React.js - REMIX - TailwindCss - fontAwesome</span>
                <span className="font-pl-bold text-1xl text-[#79726C]">Date : 07/02/2025</span>
            </div>
            <p className="font-pl text-2xl text-[#79726C] ml-7  mx-5">Notre projet consiste à concevoir et développer une plateforme de commerce électronique dédiée à la vente de produits artisanaux. Cette plateforme offrira aux artisans et créateurs une vitrine en ligne pour présenter et commercialiser leurs produits uniques, tout en offrant aux clients une expérience d&apos;achat conviviale et sécurisée. </p>
          </div>
          <div className="h-20"></div>
                <span className="font-pl-bold text-3xl text-[#79726C]">Screen</span>
          <div className="w-[75%] h-[30rem] rounded">
            <div className="overflow-hidden rounded-md shadow-xl h-full w-full bg-black">
                {/* <img className=" min-h-[50%] min-w-[50%] object-cover object-center" src="/img/pp.jpeg" alt="img"/> */}
            </div>
          </div>
          <div className="w-[75%] h-[30rem] rounded">
            <div className="overflow-hidden rounded-md shadow-xl h-full w-full bg-black">
                {/* <img className=" min-h-[50%] min-w-[50%] object-cover object-center" src="/img/pp.jpeg" alt="img"/> */}
            </div>
          </div>
          
          <div className="w-[75%] h-[30rem] rounded">
            <div className="overflow-hidden rounded-md shadow-xl h-full w-full bg-black">
                {/* <img className=" min-h-[50%] min-w-[50%] object-cover object-center" src="/img/pp.jpeg" alt="img"/> */}
            </div>
          </div>
          
          <div className="w-[75%] h-[30rem] rounded">
            <div className="overflow-hidden rounded-md shadow-xl h-full w-full bg-black">
                {/* <img className=" min-h-[50%] min-w-[50%] object-cover object-center" src="/img/pp.jpeg" alt="img"/> */}
            </div>
          </div>
          
      </div>
    </Layout>
  );
}
