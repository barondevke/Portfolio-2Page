import React from "react";
import "../../pages/styles.css";

/* =========================
   Reusable Project Card
========================= */
const ProjectCard = ({
  title,
  image,
  link,
  tech,
  description,
}) => (
  <div className="projectImg mb-12">
    <div className="relative mb-6 overflow-hidden rounded-lg shadow-lg">
      <img src={require(`./img/${image}`)} className="w-full" alt={title} />

      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <div className="mask absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-[hsla(0,0%,98.4%,0.2)]" />
        </a>
      )}
    </div>

    <h5 className="mb-4 text-2xl font-bold text-white text-center">
      {title}
    </h5>

    <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
      {tech.map((t) => (
        <img
          key={t}
          src={require(`./img/${t}`)}
          style={{ width: "2.5rem" }}
          alt={t}
        />
      ))}
    </div>

    <p className="text-neutral-400 text-sm text-center max-w-md mx-auto">
      {description}
    </p>
  </div>
);

/* =========================
   Tech Proficiency
========================= */
const TechStack = () => {
  const skills = [
    { name: "React.js", img: "react.png", external: false },
    { name: "Node.js", img: "nodejs.png", external: false },
    { name: "Next.js", img: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", external: true },
    { name: "TypeScript", img: "https://cdn.simpleicons.org/typescript/3178C6", external: true },
    { name: "PostgreSQL", img: "https://cdn.simpleicons.org/postgresql/4169E1", external: true },
    { name: "SQL", img: "sql.png", external: false },
    { name: "Redis", img: "redis.png", external: false },
    { name: "Docker", img: "docker.png", external: false },
    { name: "JWT Auth", img: "jwt.png", external: false },
    { name: "Bootstrap", img: "bootstrap.png", external: false },
    { name: "Git & GitHub", img: "github.png", external: false },
  ];

  return (
    <div className="mt-24">
      <h3 className="text-2xl font-bold mb-6 text-white text-center">
        Tech Stack & Proficiency
      </h3>

      <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-center bg-slate-800 px-4 py-2 rounded-full"
          >
            <img
              src={
                skill.external ? skill.img : require(`./img/${skill.img}`)
              }
              alt={skill.name}
              title={skill.name}
              style={{
                width: "4rem",
                height: "4rem",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/* =========================
   Main Projects Component
========================= */
const Projects = () => {
  return (
    <section
      id="projects-section"
      className="mb-32 mx-16 text-center lg:text-left Projects"
    >
      <h2 className="mb-16 pt-20 text-center text-2xl font-bold text-white">
        My Projects
      </h2>
      <p className="text-center text-neutral-300 mb-12">
        More projects and code samples on{" "}
        <a
          href="https://github.com/barondevke"
          target="_blank"
          rel="noreferrer"
          className="text-white underline"
        >
          GitHub
        </a>
        .
      </p>

      {/* ===== Live Projects ===== */}
      <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2 justify-center">
        <ProjectCard
          title="TriSpectra"
          image="trispectra.png"
          link="https://trispectratx-tech.com/"
          tech={["react.png", "bootstrap.png", "nodejs.png"]}
          description="Responsive site for a software company offering custom development and consultancy services."
        />

        <ProjectCard
          title="Help On Wheels"
          image="help_on_wheels.png"
          link="https://help-on-wheels.com"
          tech={["react.png", "tailwind.png", "nodejs.png", "sql.png"]}
          description="Car towing and roadside assistance platform built with React, Tailwind, and Node.js."
        />

        <ProjectCard
          title="Tembezi"
          image="tembezi.png"
          link="https://tembea-murex.vercel.app/"
          tech={["react.png", "tailwind.png", "nodejs.png"]}
          description="Modern web app showcasing a clean, responsive experience with fast navigation and polished UI."
        />
      </div>

      {/* ===== Tech Stack ===== */}
      <TechStack />
    </section>
  );
};

export default Projects;
