"use client";
import { useState } from "react";
import Experience from "../Components/Experience";
import { experienceTimeline } from "../data/data";
export default function PageCV() {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <div className="w-full bg-white px-8 py-6 h-fit flex flex-col sm:px-4 min-h-screen">
      <div className="w-full bg-white px-8 py-6 h-[128px] md:hidden"></div>
      <article className="w-full bg-white flex flex-col items-center">
        <h1 className="text-3xl mb-10 w-[60%] font-semibold md:w-full md:pt-10 md:px-9 sm:px-2 sm:text-2xl">
          Julius René er en skuespiller med stor erfaring inden for reklamer
          <span className="sm:hidden">
            , film-produktioner og også flere dokumentarfilm-opgaver i Danmark.
          </span>
        </h1>
        {/* Autobiography text section: */}
        <section className="w-[60%] lg:w-[90%] mb-10 font-secondary">
          <div
            className={
              "[&>p]:mb-2 [&>p]:text-xl" + (isClicked ? " block" : " hidden")
            }
          >
            <p>
              Julius René har altid en meget professionel tilgang til sit
              skuespil - både i sin optræden på scene og på film set.{" "}
              <span className="sm:hidden">
                Hans disciplinerede men også legende og kreative tilgang til
                sine opgaver viser tydeligt hans dedikation og passion for
                skuespillet. Han mestrer alle genrer - fra drama til comedy.
              </span>
            </p>
            <p className="sm:hidden">
              Han har tillige opnået en Advanced Postgraduate-grad (PhD-niveau)
              i basbasun fra The National Academy of Music. Og er også lidt
              skolet i Meisner og Method acting.
            </p>
          </div>
          <div
            className={
              "[&>p]:mb-2 [&>p]:text-xl" + (isClicked ? " hidden" : " block")
            }
          >
            <p>
              Julius René is an actor with extensive experience in commercials,
              film productions and also several documentary projects in Denmark.
              He has also appeared in worldwide series - eg Borgen 4.
            </p>
            <p>
              Julius René always has a very professional approach to his acting
              - both in his performance on stage and on film. His disciplined
              but also playful and creative approach to his tasks clearly shows
              his dedication and passion for acting. He masters all genres -
              from drama to comedy.
            </p>
            <p>
              He also holds an Advanced Postgraduate degree (PhD level) in bass
              trombone from The National Academy of Music. And is also a little
              schooled in Meisner and Method acting.
            </p>
          </div>
        </section>

        {/* The projects timeline: */}

        <section className="w-[60%] lg:w-[90%]">
          {experienceTimeline.map(({ year, projects }, idx) => (
            <div key={idx} className="w-full flex mb-10 lg:flex-col">
              <h3 className="text-2xl w-[20%] font-secondary md:mb-4">
                {year}
              </h3>
              <div className="w-[80%] font-secondary [&>p]:mb-2 [&>p]:text-xl ">
                {projects.map((project, idx) => (
                  <p key={idx}>{project}</p>
                ))}
              </div>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
}
