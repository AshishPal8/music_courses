"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

function page() {
  return (
    <div className="w-full h-screen bg-slate-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute z-0" />
      <div className="z-10 relative">
        <h1 className="text-lg md:text-6xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-center max-w-xl text-gray-400 font-semibold mx-auto">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form className="space-y-4 mt-10 flex flex-col w-full mx-auto max-w-3xl gap-2">
          <input
            className="bg-black/60 py-6 px-3 rounded-md"
            type="text"
            placeholder="Enter email address"
            required
          />
          <textarea
            className="bg-black/60 py-6 px-3 rounded-md"
            rows={5}
            placeholder="message"
            required
          ></textarea>
          <div>
            <button className="bg-sky-500 hover:bg-sky-600 focus:bg-sky-700 cursor-pointer px-8 py-3 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
