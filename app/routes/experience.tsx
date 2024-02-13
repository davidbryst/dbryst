import type { MetaFunction } from "@remix-run/node";
import Layout from "~/layout/layout";

export const meta: MetaFunction = () => {
  return [
    { title: "dadvink | experience" },
    { name: "description", content: "Welcome !" },
  ];
};

export default function Experience() {
  return (
    <Layout>
      <div className="w-[75%] h-[75%] mx-3 my-2 flex flex-col justify-start gap-10">
          <span className="font-pl-bold text-3xl xl:text-5xl text-[#998D85]">experience</span>
          <div className="w-[50%] h-1 bg-[#998D85] rounded"></div>
          <div></div>
          <p className="font-pl-bold-italic text-xl xl:text-4xl text-[#79726C]">Salut ! Je suis David Abraham, mais sur les réseaux sociaux, on me connaît sous le pseudonyme de &quot;Dadvink&quot;. Je suis informaticien, développeur web et mobile. Je fais également de la conception graphique 2D et 3D. J&apos;aime fusionner technologie et design pour créer des expériences numériques innovantes et captivantes.</p>

        
      </div>
    </Layout>
  );
}
