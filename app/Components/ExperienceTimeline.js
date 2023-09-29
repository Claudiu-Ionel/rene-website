// Data:
import { experienceTimelineData } from "../data/data";

// Language context:
import { useContext } from "react";
import { AppContext } from "../layout";

export default function ExperienceTimeline() {
  const { englishVersion } = useContext(AppContext);
  return (
    <article className="w-full bg-white flex flex-col items-center">
      <h2 className="font-primary text-3xl my-10">
        {!englishVersion ? "Erfaring" : "Experience"}
      </h2>
      <section className="w-[60%] ipadAir:w-full">
        {experienceTimelineData.map(({ year, projects }, idx) => (
          <div key={idx} className="w-full flex mb-10 sm:flex-col">
            <h3 className="text-2xl w-[20%] md:text-lg">{year}</h3>
            <div className="w-[80%] md:text-base">
              {projects.map((project) => (
                <p key={project}>{project}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}
