import React from 'react'
import Typical from 'react-typical';


export default function Footer() {
  return (
    <>
   
    <footer class="text-gray-300 body-font bg-slate-900">
    <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    
                      <div class="w-90 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        
                        <span class=" text-gray-400 text-3xl ml-10 transform hover:translate-x-6 hover:text-sky-500">Annex 4u</span>
                      </a>
                      <p className=" text-gray-400 text-xl mt-5 ml-14 md:w-1/2" > hello, 👋 
                              <p>I have put some project whic was h made by me. i hope like it and enjoy it it's features.</p> </p>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                      <div class="lg:full md:w-1/2 w-full px-4 ">

                      
                      <div className=" justify-center">
                        <h2 class="title-font font-medium  text-gray-400 tracking-widest text-3xl transform hover:translate-x-6 hover:text-sky-500 justify-center"> Let's Connect</h2>

                        <div className='flex space-x-5 mt-10 justify-center'>

                        <a href='https://www.facebook.com/arijit.vaghela.7/' target='_blank' class="text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 hover:stroke-sky-500" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class=" text-gray-400" href='https://twitter.com/Ajitkumar075' target='_blank'>
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 hover:stroke-sky-500" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a href='https://www.instagram.com/ajit_vaghela_007/'target='_blank'  class=" text-gray-400">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 hover:stroke-sky-500" viewBox="0 0 24 24">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a class=" text-gray-400" href='https://www.linkedin.com/in/vaghela-ajitkumar-092605222/' target='_blank'>
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 hover:stroke-sky-500" viewBox="0 0 24 24">
                          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                          <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                      </a>
                      </div>
                      </div>
                      <h2 class="title-font font-medium text-gray-400 tracking-widest text-2xl transform hover:translate-x-6 hover:text-sky-500 justify-center mt-10">
                      
              <Typical
              steps={['🅰️ Annex-4u', 1000, 'Vaghela Ajitkumar', 1000,'GEC-Rajkot 🎒', 1000]}
              loop={Infinity}
              wrapper="p"
            />
            </h2>

 
                      </div>
         </div>
        
       
    
    </div>
    
    
  </footer>
    </>
  )
}
