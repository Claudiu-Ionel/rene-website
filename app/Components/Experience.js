"use client";

// Language context:
import { useContext } from "react";
import { AppContext } from "../layout";

// Data:
import { experienceTimelineData } from "../data/data";

export default function Experience() {
  const { englishVersion } = useContext(AppContext);

  return (
    <article className="w-full bg-white flex flex-col items-center">
      <h2 className="font-primary text-3xl my-10">
        {!englishVersion ? "Erfaring" : "Experience"}
      </h2>

      {/* Autobiography text section: */}

      <section className="w-[60%] lg:w-full mb-10 font-secondary text-xl lg:text-lg text-justify sm:px-4">
        <div className={"[&>p]:mb-4" + (englishVersion ? " block" : " hidden")}>
          <p>
            Julius René is a skilled actor with an impressive background in
            commercials, film productions and documentaries in Denmark. He has
            also made his mark in worldwide series such as &quot;Borgen 4&quot;.
          </p>
          <p>
            Julius René always brings a highly professional approach to his
            acting, whether on stage or in front of the camera. His approach is
            characterized by discipline, creativity and playful elements that
            testify to his deep commitment and passion for acting. He masters a
            wide range of genres, from drama to comedy, and is well versed in
            both Meisner and Method acting techniques.
          </p>
          <p>
            In addition to his acting career, Julius René has an impressive
            musical background. He graduated from the Soloist class Advanced
            Postgraduate degree (PhD level) in bass trombone from The National
            Academy of Music. He has performed with renowned orchestras such as
            the Aalborg Symphony Orchestra, the Schleswig Musikkorps, the
            Prince&apos;s Musikkorps, the Odense Symphony Orchestra and Dr.
            Bigband, and he has also participated in concerts abroad. In
            addition, he has collaborated with prominent musicians such as Mich
            Hedin Hansen (CutFather) and contributed to albums by the Danish
            rapper Nikoline Nikoline and the Danish electropop group When Saints
            Go Machine. Julius René is an artist with remarkable versatility and
            impressive experience in both theatre, film and music.
          </p>
        </div>
        <div
          className={"[&>p]:mb-4" + (!englishVersion ? " block" : " hidden")}
        >
          <p>
            Julius René er en dygtig skuespiller med en imponerende baggrund
            inden for reklamer, filmproduktioner og dokumentarfilm i Danmark.
            Han har også markeret sig i verdensomspændende serier som
            &quot;Borgen 4&quot;.
          </p>
          <p>
            Julius René bringer altid en yderst professionel tilgang til sit
            skuespil, uanset om det er på scenen eller foran kameraet. Hans
            tilgang er præget af disciplin, kreativitet og legende elementer,
            der vidner om hans dybe engagement og lidenskab for skuespillet. Han
            mestrer en bred vifte af genrer, fra drama til komedie, og han er
            velbevandret i både Meisner og Method acting-teknikker.
          </p>
          <p>
            Ud over sin skuespilkarriere har Julius René en imponerende
            musikalsk baggrund. Han er uddannet fra Solistklassen Advanced
            Postgraduate-grad (PhD-niveau) i basbasun fra The National Academy
            of Music. Han har optrådt med anerkendte orkestre som Aalborg
            Symfoniorkester, Slesvigske Musikkorps, Prinsens Musikkorps, Odense
            Symfoniorkester og Dr. Bigband, og han har også deltaget i koncerter
            i udlandet. Derudover har han samarbejdet med prominente musikere
            som Mich Hedin Hansen (CutFather) og bidraget til albummer af den
            danske rapper Nikoline Nikoline og den danske elektropopgruppe When
            Saints Go Machine. Julius René er en kunstner med en
            bemærkelsesværdig alsidighed og imponerende erfaring inden for både
            teater, film og musik.
          </p>
        </div>
      </section>

      {/* The projects timeline: */}

      {/* <section className="w-[60%] lg:w-[90%]">
        {experienceTimelineData.map(({ year, projects }, idx) => (
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
