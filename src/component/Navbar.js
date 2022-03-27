import React from "react";
import logo from "../services.svg";
import { motion } from "framer-motion";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";

export default function Navbar() {
  return (
    <>
      <header className="text-gray-400 bg-slate-900 body-font  outline outline-offset-2 outline-6 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  ">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 px-20">
            <div className="flex ml-11  align-middle">
              <span className="ml-3 text-3xl">Annex</span>
            </div>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center justify-center px-28 space-x-10 text-xl">
            <a
              className="mr-5 hover:text-sky-500"
              href="https://annex4u.blogspot.com/" target="_blank"
            >
              blog
            </a>
          <a  href="https://github.com/ajitkumar1264" target="_blank">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-6 h-6 hover:stroke-sky-500"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"  href="https://github.com/ajitkumar1264"
              d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
            ></path>
          </svg>
          </a>

          </nav>
        </div>
      </header>

      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <div className="lg:w-1/2 w-full lg:pr-0 mb-10 lg:mb-10 spa ">
              <section className="text-gray-400 body-font h-auto">
                <motion.div
                  className="container h-20 w-20 bg-sky-200 hover:bg-sky-500 place-content-center rounded-lg shadow-2xl animate-pulse "
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
                />

                <div className="container py-20 mx-auto">
                  <Slide left cascade>
                    <div className="xl:w-1/3 lg:w-3/4 w-full text-center mr-12 animate-bounce">
                      <h1 className=" md:w-15 lg:w-48 text-9xl font-semibold object-cover text-sky-200 box-decoration-clone box-border rounded-l-lg hover:text-sky-500 ">
                        Annex4u
                      </h1>
                    </div>
                    <div className="pt-2 pr-6 pl-4">
                      <p className="pr-6 text-xl ">
                      Hi 👋,
                      My name is Vaghela Ajitkumar. I'm Pursuing computer Engineering from Government Engineering College Rajkot. I'm a React Js Developer.
                      </p>
                      <div className="pt-8 flex space-x-5 ">
                        <button className="transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300 rounded-full w-32 text-gray-200  hover:text-gray-900 h-8 border-solid border-2 border-sky-200 text-l">
                          Sign in
                        </button>
                        <button className="transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300 rounded-full w-32 text-gray-200  hover:text-gray-900 h-8 border-solid border-2 border-sky-200 text-l">
                          Sing up
                        </button>
                      </div>
                    </div>
                  </Slide>
                </div>
              </section>
            </div>

            <Fade bottom big cascade>
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto  object-contain object-center rounded animate-bounce"
                src={logo}
              />
            </Fade>
          </div>
        </div>
      </section>

     
    </>
  );
}
