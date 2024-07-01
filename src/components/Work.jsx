/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { data } from "../data/data.js";
import hero from '../assets/hero.jpeg'; // Import the hero image
import datadata from '../assets/datadata.jpg'; // Import the datadata image
import photo from '../assets/photo.jpg'; // Import the photo image
import borabora from '../assets/borabora.jpg'; // Import the new project image

const Work = () => {
  // projects file
  const projects = data.slice(0, 4); // Slice to get the first four projects

  // Define the images for each project explicitly
  const projectImages = [hero, datadata, photo, borabora];

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-green-300'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {projects.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${projectImages[index]})`, // Use specific image for each project
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;



