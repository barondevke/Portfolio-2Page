import React from "react";
import "../../pages/styles.css";

const Projects = () => {
  return (
    <section className="mb-32 mx-16 text-center lg:text-left Projects">
      {/* Live Project Section */}
      <h2 className="mb-16 pt-20 text-center text-2xl font-bold text-white">
        My Projects
      </h2>

      <div className="grid gap-x-6 lg:grid-cols-2 justify-center">
        {/* TriSpectra */}
        <div className="mb-12 lg:mb-0 projectImg">
          <div
            className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={require("./img/trispectra.png")} className="w-full" />
            <a
              href="https://trispectratx-tech.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-[hsla(0,0%,98.4%,0.2)]" />
            </a>
          </div>

          <h5 className="mb-4 text-lg font-bold text-white text-2xl">
            TriSpectra
          </h5>

          <div className="mb-4 flex items-center justify-center gap-4">
            <img src={require("./img/react.png")} alt="React" style={{ width: "2.5rem" }} />
            <img src={require("./img/bootstrap.png")} alt="Bootstrap" style={{ width: "2.5rem" }} />
            <img src={require("./img/nodejs.png")} alt="Node.js" style={{ width: "2.5rem" }} />
          </div>

          <p className="text-neutral-500 dark:text-neutral-300 text-sm">
            Responsive site for a software company offering custom dev & consultancy services. Built with React, Bootstrap, and Node.js.
          </p>
        </div>
        <div className="mb-12 lg:mb-0 projectImg">
          <div
            className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={require("./img/tembezi.png")} className="w-full" />
            <a
              href="https:///tembezi.co.ke"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-[hsla(0,0%,98.4%,0.2)]" />
            </a>
          </div>

          <h5 className="mb-4 text-lg font-bold text-white text-2xl">
            Tembezi
          </h5>

          <div className="mb-4 flex items-center justify-center gap-4">
            <img src={require("./img/react.png")} alt="React" style={{ width: "2.5rem" }} />
            <img src={require("./img/tailwind.png")} alt="Bootstrap" style={{ width: "2.5rem" }} />
            <img src={require("./img/nodejs.png")} alt="Node.js" style={{ width: "2.5rem" }} />
            <img src={require("./img/redis.png")} alt="Node.js" style={{ width: "2.5rem" }} />
            <img src={require("./img/sql.png")} alt="Node.js" style={{ width: "2.5rem" }} />
          
          
          </div>

          <p className="text-neutral-500 dark:text-neutral-300 text-sm">
         My personal E-Commerce platform for selling travel packages from different merchants.
          </p>
        </div>
      </div>
      <div className="grid gap-x-6 lg:grid-cols-2 justify-center">
        {/* TriSpectra */}
       
        <div className="mb-12 lg:mb-0 projectImg">
          <div
            className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={require("./img/help_on_wheels.png")} className="w-full" />
            <a
              href="https://help-on-wheels.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-[hsla(0,0%,98.4%,0.2)]" />
            </a>
          </div>

          <h5 className="mb-4 text-lg font-bold text-white text-2xl">
            Help On Wheels
          </h5>

          <div className="mb-4 flex items-center justify-center gap-4">
            <img src={require("./img/react.png")} alt="React" style={{ width: "2.5rem" }} />
            <img src={require("./img/tailwind.png")} alt="Bootstrap" style={{ width: "2.5rem" }} />
            <img src={require("./img/nodejs.png")} alt="Node.js" style={{ width: "2.5rem" }} />
            <img src={require("./img/sql.png")} alt="Node.js" style={{ width: "2.5rem" }} />
          
          
          </div>

          <p className="text-neutral-500 dark:text-neutral-300 text-sm">
          Responsive site for a car towing company offering differtent roadside management services. Built with React, Tailwind, and Node.js.
            </p>
        </div>
      </div>
      <div className="grid gap-x-6 lg:grid-cols-3 justify-center">
        {/* tembezi*/}
      
      </div>

      {/* Skills Section */}
      <div className="mt-24">
  <h3 className="text-2xl font-bold mb-6 text-white text-center">
    Tech Stack & Proficiency
  </h3>
  <div className="flex flex-wrap justify-center gap-6 text-white text-sm">
    {[
      { name: "React.js", img: "react.png" },
      { name: "Node.js", img: "nodejs.png" },
      { name: "SQL", img: "sql.png" },         // You can use a generic DB icon if no SQL logo
      { name: "Redis", img: "redis.png" },
      { name: "Docker", img: "docker.png" },
      { name: "JWT Auth", img: "jwt.png" },     // Use jwt.png or fallback to text
      { name: "Bootstrap", img: "bootstrap.png" },
      { name: "Git & GitHub", img: "github.png" },
    ].map((skill) => (
      <div
        key={skill.name}
        className="flex items-center justify-center bg-slate-800 px-4 py-2 rounded-full"
      >
        {skill.img ? (
          <img
            src={require(`./img/${skill.img}`)}
            alt={skill.name}
            style={{ width: "4rem", height: "4rem", objectFit: "contain" }}
            title={skill.name}
          />
        ) : (
          <span>{skill.name}</span>
        )}
      </div>
    ))}
  </div>
</div>


      {/* Offline Projects Section */}
      <div className="mt-24">
        <h3 className="text-2xl font-bold mb-10 text-white text-center">
          Other Projects (Currently Offline)
        </h3>

        <div className="grid gap-x-6 gap-y-12 lg:grid-cols-2 justify-center">
          {/* Voice of the Voiceless */}
          <div className="projectImg">
            <div className="mb-4">
              <img
                src={require("./img/vov.png")}
                alt="Voice of the Voiceless"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <h5 className="text-white text-xl font-semibold mb-2">
              Voice of the Voiceless
            </h5>
            <div className="flex gap-4 mb-2">
              <img src={require("./img/react.png")} style={{ width: "2.5rem" }} />
              <img src={require("./img/bootstrap.png")} style={{ width: "2.5rem" }} />
              <img src={require("./img/nodejs.png")} style={{ width: "2.5rem" }} />
            </div>
            <p className="text-neutral-400 text-sm">
              A job board for human rights initiatives. Admins post jobs and users apply through a secure portal. Includes role-based access and email notifications.
            </p>
          </div>

          {/* Woodberg Furniture */}
          <div className="projectImg">
            <div className="mb-4">
              <img
                src={require("./img/woodberg.png")}
                alt="Woodberg Furniture"
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <h5 className="text-white text-xl font-semibold mb-2">
              Woodberg Furniture
            </h5>
            <div className="flex gap-4 mb-2">
              <img src={require("./img/react.png")} style={{ width: "2.5rem" }} />
              <img src={require("./img/bootstrap.png")} style={{ width: "2.5rem" }} />
              <img src={require("./img/nodejs.png")} style={{ width: "2.5rem" }} />
            </div>
            <p className="text-neutral-400 text-sm">
              A furniture store website featuring a dynamic catalog, inventory CMS, and Stripe payment integration. Built for performance and conversion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
