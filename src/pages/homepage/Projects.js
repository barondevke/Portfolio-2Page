import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Image, Col, Row, Container, NavLink } from "react-bootstrap";
import "../../pages/styles.css";

const Projects = () => {
  return (
    <section class="mb-32 text-center lg:text-left  Projects  ">
      <h2
        style={{ color: "white" }}
        class="mb-32 pt-20 text-center text-2xl font-bold"
      >
        My Projects
      </h2>

      <div class="grid gap-x-6 lg:grid-cols-3  ">
        <div class="mb-12 lg:mb-0 projectImg">
          <div
            class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              src={require("./img/vov.png")}
              class="w-full "
            />
            <a href="https://vofthevoiceless.com/">
              <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
            </a>
          </div>
          <h5
            style={{ color: "white", fontSize: "2rem" }}
            class="mb-4 text-lg font-bold"
          >
            Voice of the Voiceless
          </h5>
          <div class="mb-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 lg:justify-center">
            <img
              style={{
                textAlign: "center",
                width: "2.5rem",
                marginRight: "3%",
              }}
              src={require("./img/react.png")}
            ></img>
            <img
              style={{
                textAlign: "center",
                width: "2.5rem",
              }}
              src={require("./img/bootstrap.png")}
            ></img>
          </div>
          <p class="text-neutral-500 dark:text-neutral-300 text-sm">
            A webapp that allows users to post job adverts and also to find jobs as applicants.
          </p>
        </div>

        <div class="mb-12 lg:mb-0 projectImg">
          <div
            class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={require("./img/trispectra.png")} class="w-full " />
            <a href="https://trispectratx-tech.com/">
              <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
            </a>
          </div>

          <h5
            style={{ color: "white", fontSize: "2rem" }}
            class="mb-4 text-lg font-bold"
          >
            TriSpectra
          </h5>
          <div class="mb-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 lg:justify-center">
            <img
              style={{
                textAlign: "center",
                width: "2.5rem",
                marginRight: "3%",
              }}
              src={require("./img/react.png")}
            ></img>
            <img
              style={{
                textAlign: "center",
                width: "2.5rem",
                marginRight: "3%",
              }}
              src={require("./img/bootstrap.png")}
            ></img>
            <img
              style={{
                textAlign: "center",
                width: "2.5rem",
              }}
              src={require("./img/nodejs.png")}
            ></img>
          </div>
          <p class="text-neutral-500 dark:text-neutral-300 text-sm">
            This website is built for TriSpectra.TriSpectra is the partner of choice for many of the world's leading enterprises, SMEs and technology challengers. We help businesses elevate their value 
            through custom software development, product design, QA and consultancy services.
          </p>
        </div>

        <div class="mb-12 lg:mb-0 projectImg">
          <div
            class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
           
           <img src={require("./img/woodberg.png")} class="w-full " />
            <a href="https://woodbergfurnituresltd.com/">
              <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
            </a>
          </div>

          <h5
            style={{ color: "white", fontSize: "2rem" }}
            class="mb-4 text-lg font-bold"
          >
            Woodberg Furniture
          </h5>
          <div class="mb-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 lg:justify-center">
            
          <img
              style={{
                textAlign: "center",
                width: "2.5rem",
                marginRight: "3%",
              }}
              src={require("./img/react.png")}
            ></img>
            <img
              style={{
                textAlign: "center",
                width: "2.5rem",
                marginRight: "3%",
              }}
              src={require("./img/bootstrap.png")}
            ></img>
            <img
              style={{
                textAlign: "center",
                width: "2.5rem",
              }}
              src={require("./img/nodejs.png")}
            ></img>
          </div>
          <p class="text-neutral-500 dark:text-neutral-300 text-sm">
          Woodberg Furniture is a premier furniture selling company that exudes timeless craftsmanship, elegance, and functionality. Specializing in creating pieces that seamlessly blend traditional charm with modern aesthetics, Woodberg Furniture is dedicated to providing high-quality, handcrafted furniture that 
          transforms living spaces into expressions of personal style.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
