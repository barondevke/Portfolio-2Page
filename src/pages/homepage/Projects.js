import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Image, Col, Row, Container, NavLink } from "react-bootstrap";
import "../../pages/styles.css";

const Projects = () => {
  return (
    <section class="mb-32 text-center lg:text-left">
      <h2
        style={{ color: "white" }}
        class="mb-12 text-center text-3xl font-bold"
      >
        My Projects
      </h2>

      <div class="grid gap-x-6 lg:grid-cols-3">
        <div class="mb-12 lg:mb-0">
          <div
            class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              src={require("./img/Screenshot 2023-09-29 105845.png")}
              class="w-full"
            />
            <a href="https://eurekahealthsolutions.netlify.app/">
              <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
            </a>
          </div>
          <h5
            style={{ color: "white", fontSize: "2rem" }}
            class="mb-4 text-lg font-bold"
          >
            Eureka Health Solutions
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
          <p class="text-neutral-500 dark:text-neutral-300">
            A simple informative website that helps your customers acquainte
            themselves with your business or product. With an About Us and
            Services section, customers easily find out more about you.
          </p>
        </div>

        <div class="mb-12 lg:mb-0">
          <div
            class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={require("./img/Screenshot (32).png")} class="w-full" />
            <a href="#!">
              <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
            </a>
          </div>

          <h5
            style={{ color: "white", fontSize: "2rem" }}
            class="mb-4 text-lg font-bold"
          >
            AdInfinite website
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
          <p class="text-neutral-500 dark:text-neutral-300">
            This website is built for startup AdInfinite. It allows users to
            create, add, and search for the latest ads and services in their
            area.
          </p>
        </div>

        <div class="mb-0">
          <div
            class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.jpg"
              class="w-full"
            />
            <a href="#!">
              <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
            </a>
          </div>

          <h5
            style={{ color: "white", fontSize: "2rem" }}
            class="mb-4 text-lg font-bold"
          >
            Sun City
          </h5>
          <div class="mb-4 flex items-center justify-center text-sm font-medium text-warning lg:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              href="https://www.flaticon.com/free-icons/nodejs"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
            Family friendly
          </div>
          <p class="text-neutral-500 dark:text-neutral-300">
            Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu,
            non vehicula nisl dui quis diam. Mauris ut risus eget massa volutpat
            feugiat. Donec.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
