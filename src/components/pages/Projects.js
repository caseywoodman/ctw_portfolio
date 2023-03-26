import React from "react";

function Projects() {
  return (
    <div className="pt-4">
      <h1 className="text-center text-3xl font-bold">PROJECTS</h1>
      <div className="flex justify-center w-9/12 flex-wrap m-auto">
        <div className="w-[350px] h-[350px] m-2 bg-[#5BC0BE] relative">
          <img className="absolute z-10 w-[350px] h-[350px] object-cover object-right hover:hidden" src="./assets/Fully deployed site.png" alt="Point of Sale" />
          <div className="absolute text-black flex m-auto flex-col w-full">
            <h2 className="text-center font-bold text-2xl pb-2">C2EZ POS</h2>
            <p className="text-justify px-2">This project was created from scratch using Handlebars. It was a group project in which I did the Backend using SQL. This Ipad application allowed the user to add items to a cart, create customers, and log orders purchased in the database.</p>
            <p className="text-center font-semibold text-lg pt-4">TECHNOLOGY USED</p>
            <p className="text-justify px-2">Handlebars, SQL, Sequelize, JavaScript, TailwindCSS, MySQLWorkbench</p>
            <a href="https://github.com/team-C2EZ/c2ez-pos" className="p-4" target="_blank">
              <img src="./assets/GitHub-Mark.png" alt="GitHub" className="w-8 h-8 m-auto" />
            </a>
          </div>
        </div>
        <div className="w-[350px] h-[350px] m-2 bg-[#5BC0BE] relative">
          <img className="absolute z-10 w-[350px] h-[350px] object-cover object-left hover:hidden" src="./assets/Deployed Information.png" alt="Bikes 4 U" />
          <div className="absolute text-black flex m-auto flex-col w-full">
            <h2 className="text-center font-bold text-2xl pb-2">BIKES 4 U</h2>
            <p className="text-justify px-2">This project was created from scratch using HTML, CSS, and JavaScript. It was a group project in which I completed much of the API fetching, data manipulation and styling. The Application took geolocation to see where nearby bikes to rent are located.</p>
            <p className="text-center font-semibold text-lg pt-4">TECHNOLOGY USED</p>
            <p className="text-justify px-2">HTML, JavaScript, CSS, TailwindCSS, Fetch API</p>
            <a href="https://github.com/Team-A2C2E/Bikes4U" className="p-4" target="_blank">
              <img src="./assets/GitHub-Mark.png" alt="GitHub" className="w-8 h-8 m-auto" />
            </a>
          </div>
        </div>
        <div className="w-[350px] h-[350px] m-2 bg-[#5BC0BE] relative">
          <img className="absolute z-10 w-[350px] h-[350px] object-cover object-center hover:hidden" src="./assets/Password Display.png" alt="Get a Password" />
          <div className="absolute text-black flex m-auto flex-col w-full">
            <h2 className="text-center font-bold text-2xl pb-2">GET A PASSWORD</h2>
            <p className="text-justify px-2">A class assignment where asked to create a password generator based off input from the user to include upper/lower, special characters, length.</p>
            <p className="text-center font-semibold text-lg pt-4">TECHNOLOGY USED</p>
            <p className="text-justify px-2">Node.js, HTML, JavaScript</p>
            <a href="https://github.com/caseywoodman/getapassword" className="p-4" target="_blank">
              <img src="./assets/GitHub-Mark.png" alt="GitHub" className="w-8 h-8 m-auto" />
            </a>
          </div>
        </div>
        <div className="relative w-[350px] h-[350px] m-2 bg-[#5BC0BE]">
          <img className="absolute z-10 w-[350px] h-[350px] object-cover object-center hover:hidden" src="./assets/Timer Bar with Question.png" alt="Speed Test" />
          <div className="absolute text-black flex m-auto flex-col w-full">
            <h2 className="text-center font-bold text-2xl pb-2">SPEEDTEST</h2>
            <p className="text-justify px-2">JavaScript Development, this application allows the user to take a quiz in a 30 second timer, miss a question loose 10 seconds. Can you complete the challenge?</p>
            <p className="text-center font-semibold text-lg pt-4">TECHNOLOGY USED</p>
            <p className="text-justify px-2">JavaScript, CSS</p>
            <a href="https://github.com/caseywoodman/speedtest" className="p-4" target="_blank">
              <img src="./assets/GitHub-Mark.png" alt="GitHub" className="w-8 h-8 m-auto" />
            </a>
          </div>
        </div>
        <div className="relative w-[350px] h-[350px] m-2 bg-[#5BC0BE]">
          <img className="absolute z-10 w-[350px] h-[350px] object-cover object-center hover:hidden" src="./assets/VIEWING TABLES.png" alt="Employee Tracker" />
          <div className="absolute text-black flex m-auto flex-col w-full">
            <h2 className="text-center font-bold text-2xl pb-2">EMPLOYEE TRACKER</h2>
            <p className="text-justify px-2">This Application allows the user to use the terminal to create, read, update, and delete data for employees of their company.</p>
            <p className="text-center font-semibold text-lg pt-4">TECHNOLOGY USED</p>
            <p className="text-justify px-2">Node.js, inquier, SQL, JavaScript</p>
            <a href="https://github.com/caseywoodman/employee_tracker" className="p-4" target="_blank">
              <img src="./assets/GitHub-Mark.png" alt="GitHub" className="w-8 h-8 m-auto" />
            </a>
          </div>
        </div>
        <div className="relative w-[350px] h-[350px] m-2 bg-[#5BC0BE]">
          <img className="absolute z-10 w-[350px] h-[350px] object-cover object-center hover:hidden" src="./assets/POST PAGE.png" alt="Tech Blog" />
          <div className="absolute text-black flex m-auto flex-col w-full">
            <h2 className="text-center font-bold text-2xl pb-2">TECH BLOG</h2>
            <p className="text-justify px-2">This application allows a created user to create posts, update posts, comment on posts, or delete posts on a tech blog</p>
            <p className="text-center font-semibold text-lg pt-4">TECHNOLOGY USED</p>
            <p className="text-justify px-2">SQL, Express, Sequelize, Handlebars, CSS, TailwindCSS </p>
            <a href="https://github.com/caseywoodman/tech_blog" className="p-4" target="_blank">
              <img src="./assets/GitHub-Mark.png" alt="GitHub" className="w-8 h-8 m-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
