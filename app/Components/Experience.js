import { experienceTimeline } from "../data/data";

export default function Experience() {
  return (
    <article>
      <h2>Experience</h2>
      <section>
        {experienceTimeline.map(({ year, projects }) => (
          <div>
            <p>{year}</p>
            {/*  {projects.map(({ projectName }) => (
              <p>{projectName}</p>
            ))} */}
          </div>
        ))}
      </section>
    </article>
  );

  console.log(projects);
}
