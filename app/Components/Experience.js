"use client";

import { useContext } from "react";

import { experienceTimeline } from "../data/data";
import { AppContext } from "../layout";

export default function Experience() {
  const { englishVersion } = useContext(AppContext);

  return (
    <article className="w-full bg-white flex flex-col items-center">
      <h2 className="font-primary text-3xl my-10">
        {!englishVersion ? "Erfaring" : "Experience"}
      </h2>

      {/* Autobiography text section: */}

      <section className="w-[60%] lg:w-[90%] mb-10 font-secondary text-xl text-justify">
        <div className={"[&>p]:mb-4" + (englishVersion ? " block" : " hidden")}>
          <p>
            Julius René is an actor with extensive experience in advertising,
            film productions and also several documentary film assignments in
            Denmark. He has also appeared in worldwide series - Borgen 4.
          </p>
          <p>
            Julius René always has a very professional approach to his acting -
            both in his performance on stage and on film. His disciplined but
            also playful and creative approach to his tasks clearly shows his
            dedication and passion for acting. He masters all genres - from
            drama to comedy. He is trained in Meisner and Method acting.
          </p>
          <p>
            He graduated from the Solistklassen Advanced Postgraduate degree
            (PhD level) in bass trombone from The National Academy of Music and
            throughout his career has played with the Aalborg Symphony
            Orchestra, the Schleswig Musikkorps, the Prince's Musikkorps, the
            Odense Symphony Orchestra, Dr Bigband and has also participated in
            concerts in abroad. He has also worked with Mich Hedin Hansen
            (CutFather) and also appears on records by the Danish rapper
            Nikoline Nikoline and the Danish electropop group When Saints Go
            Machine.
          </p>
        </div>
        <div
          className={"[&>p]:mb-4" + (!englishVersion ? " block" : " hidden")}
        >
          <p>
            Julius René er en skuespiller med stor erfaring inden for reklamer,
            film-produktioner og også flere dokumentarfilm-opgaver i Danmark.
            Han har også optrådt i verdensomspændende serier - fx Borgen 4.
          </p>
          <p>
            Julius René har altid en meget professionel tilgang til sit skuespil
            - både i sin optræden på scene og på film set. Hans disciplinerede
            men også legende og kreative tilgang til sine opgaver viser tydeligt
            hans dedikation og passion for skuespillet. Han mestrer alle genrer
            - fra drama til comedy. Han er skolet i Meisner og Method acting.
          </p>
          <p>
            Han er uddannet fra Solistklassen Advanced Postgraduate-grad
            (PhD-niveau) i basbasun fra The National Academy of Music og har
            gennem sin karriere spillet med Aalborg Symfoniorkester, Slesvigske
            Musikkorps, Prinsens Musikkorps, Odense Symfoniorkester, Dr Bigband
            og har tillige medvirket i koncerter i udlandet. Han har desuden
            arbejdet med Mich Hedin Hansen (CutFather) og medvirker desuden på
            plader af den danske rapper Nikoline Nikoline og den danske
            elektropop gruppe When Saints Go Machine.
          </p>
        </div>
      </section>

      {/* The projects timeline: */}

      {/* <section className="w-[60%] lg:w-[90%]">
        {experienceTimeline.map(({ year, projects }, idx) => (
          <div key={idx} className="w-full flex mb-10 lg:flex-col">
            <h3 className="text-2xl w-[20%] font-secondary">{year}</h3>
            <div className="w-[80%] font-secondary text-xl">
              {projects.map((project, idx) => (
                <p key={`project${idx}`}>{project}</p>
              ))}
            </div>
          </div>
        ))}
      </section> */}
    </article>
  );

  console.log(projects);
}
