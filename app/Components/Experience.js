import { experienceTimeline } from "../data/data";

export default function Experience() {
  return (
    <article className="w-full bg-white flex flex-col items-center">
      <h2 className="font-primary text-3xl my-10">Experience</h2>
      <section className="w-1/3">
        {experienceTimeline.map(({ year, projects }) => (
          <div className="w-full flex mb-10">
            <h3 className="text-2xl w-[20%]">{year}</h3>
            <div className="w-[80%]">
              {projects.map((project) => (
                <p>{project}</p>
              ))}
            </div>
          </div>
        ))}
      </section>
    </article>
  );

  console.log(projects);
}
