import React from "react";

export function ChooseUs() {
  return (
    <div className="bg-white h-auto w-full mt-12 mb-12">
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-[90%] lg:w-[80%] mx-auto">
        <img
          src="/choose.webp"
          alt="First"
          className="h-[20rem] md:h-[20rem] lg:h-[25rem] object-cover w-full rounded-2xl lg:w-auto"
        />
        <div className="text-center lg:text-left mt-8 lg:mt-0 lg:ml-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6A9C89]">
            Why Choose Us?
          </h1>
          <div className="mt-4 md:mt-6 lg:mt-8 leading-8 md:leading-9 lg:leading-[3rem] font-extrabold text-lg md:text-xl text-zinc-700">
            <ul className="list-none lg:list-disc space-y-4">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem ipsum dolor sit.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
