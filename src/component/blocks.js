import React from "react";
import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Slide from "react-reveal/Slide";
import { motion } from "framer-motion";
import Typical from 'react-typical';
import weather from './images/Annex weather.png';
import textutails from './images/Annex textutails.png';
import todo from './images/Annex todo.png';

 


export default function () {
  return (
    <>
      <div className="bg-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <div className="flex justify-between">

              <h2 className="text-3xl font-extrabold text-gray-900">

              <Typical
        steps={['project', 1000, '🅰️ Annex live project', 1000,' live api project 🖥️', 1000]}
        loop={Infinity}
        wrapper="p"
      />
      </h2>

              <motion.div
                className="container h-20 w-20 bg-gray-700 hover:bg-sky-500 place-content-center rounded-lg animate-bounce transform hover:rotate-45"
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              />
            </div>

            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 py-10 space-x-4">
              <div className="group relative">
                <Zoom left>
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1  transform hover:scale-90">
                    <img
                      src={weather}
                      alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </Zoom>

                <Roll right>
                  <h3 className="mt-6 text-sm text-gray-500 tra ">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      live weather app
                    </a>
                  </h3>
                  
                  <p className="text-base font-semibold text-gray-900">
                    Annex Live weather Webapp
                  </p>
                  <div className='mt-5'>
                  <a href={"https://annex-weather-app.netlify.app/"} target='_blank'>
                  <button className="transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300 rounded-full w-32 text-gray-200  hover:text-gray-900 h-8 border-solid border-2 border-sky-200 text-l">
             watch it
            </button>
            </a>
            </div>
           
                </Roll>
              </div>
              

              <div className="group relative">
                <Zoom left>
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 transform hover:scale-90">
                    <img
                      src={textutails}
                      alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </Zoom>

                <Roll right>
                  <h3 className="mt-6 text-sm text-gray-500 transform ">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Text manipulation
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Annex TextUtails
                  </p>
                  <div className='mt-5'>
                  <a href="https://ajitkumar1264.github.io/React-Textutils" target='_blank'>
                  <button className="transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300 rounded-full w-32 text-gray-200  hover:text-gray-900 h-8 border-solid border-2 border-sky-200 text-l">
                 watch it
                 </button>
                 </a>
                  
            </div>
                </Roll>
              </div>

              <div className="group relative">
                <Zoom left>
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1  transform hover:scale-90">
                    <img
                      src={todo}
                      alt="Collection of four insulated travel bottles on wooden shelf."
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </Zoom>

                <Roll right>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      To-do webapp
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    Annex To-do webapp
                  </p>
                  <div className='mt-5'>
                  <a href="https://ajitkumar1264.github.io/Annex-To-Do-app/" target='_blank'>
                        <button className="transition ease-in-out delay-150 bg-gray-900 hover:-translate-y-1 hover:scale-110 hover:bg-sky-500 duration-300 rounded-full w-32 text-gray-200  hover:text-gray-900 h-8 border-solid border-2 border-sky-200 text-l">
                         watch it
                        </button>
                        </a>
                        </div>
                </Roll>
              </div>
            </div>
          </div>
        </div>
      </div>




    
    </>
  );
}
