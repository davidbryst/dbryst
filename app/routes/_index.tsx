import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Layout from "~/layout/layout";

export const meta: MetaFunction = () => {
  return [
    { title: "dadvink | accueil" },
    { name: "description", content: "Welcome !" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="w-[75%] h-[75%] mx-3 my-2 flex flex-col justify-around">
        <div className="flex p-5 m-5 justify-center items-center">
          <div className="overflow-hidden rounded-md shadow-xl w-80 h-96 bg-black">
            {/* <img className=" min-h-[50%] min-w-[50%] object-cover object-center" src="/img/pp.jpeg" alt="img"/> */}
          </div>
          <div className="w-40"></div>
          <span className="font-pl-bold text-3xl sm:text-5xl md:text-7xl xl:text-9xl text-[#998D85]">DAVID <br /> ABRAHAM</span>
        </div>
        <div className=" flex flex-col items-center">
          <p className="font-pl-bold-italic text-md md:text-2xl xl:text-4xl text-[#79726C]">Informaticien développeur qui a des competences en infographie , créatif et qui apprend vite; avec de solides compétences.</p>
          {/* <p className="font-serif font-normal text-2xl text-[#79726C]">Titulaire d&apos;un diplome en Technologie du Web et Image Numerique (TWIN).</p> */}
          <div className="h-10"></div>
          <div className="flex gap-16">
            <Link to="/project" className="font-pl-italic text-md inline md:text-2xl xl:text-3xl text-[#79726C]">Voir mes projets</Link>
            <Link to="/about" className="font-pl-italic text-md inline md:text-2xl xl:text-3xl text-[#79726C]">En savoir plus</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
