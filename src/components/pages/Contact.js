import React from "react";
import Headshot from "./assets/Woodman Headshot.jpg";

function Contact() {
  return (
    <div className="pt-4 w-11/12 mx-auto">
      <h1 className="text-center text-3xl font-bold">CONTACT ME</h1>
      <div className="flex justify-center pt-4">
        <div className="pr-4 w-3/12 flex-0">
          <img src={Headshot} alt="headshot" className="border-8 border-[#5BC0BE]" />
        </div>
        <div className="p-4 w-4/12 flex flex-col flex-wrap bg-[#5bc0be] flex-1 text-black">
          <div className="flex justify-center">
            <div>
              <p className="text-2xl font-bold text-right p-4">EMAIL:</p>
              <p className="text-2xl font-bold text-right p-4">ADDRESS:</p>
              <p className="text-2xl font-bold text-right p-4">CITY, STATE, ZIP:</p>
              <p className="text-2xl font-bold text-right p-4">PHONE:</p>
            </div>
            <div>
              <p className="text-2xl text-left p-4">Caseytwoodman@gmail.com</p>
              <p className="text-2xl text-left p-4">8242 Kilpatrick Ave Apartment 2N</p>
              <p className="text-2xl text-left p-4">Skokie, Illinois 60076</p>
              <p className="text-2xl text-left p-4">815-980-6246</p>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <a href="https://github.com/caseywoodman" className="text-2xl text-left p-4">
              <img src="./assets/GitHub-Mark.png" className="h-20 w-20"></img>
            </a>
            <a href="https://www.linkedin.com/in/casey-woodman-04670068" className="text-2xl text-right p-4">
              <img src="./assets/LinkedIn Mark.png" className="h-20 w-20"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 w-7/12 flex flex-wrap flex-1"></div>
    </div>
  );
}

export default Contact;
