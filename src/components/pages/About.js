import React from "react";

function About() {
  return (
    <div className="pt-4 w-11/12 mx-auto">
      <h1 className="text-center text-3xl font-bold">ABOUT ME</h1>
      <div className="flex justify-center">
        <div className="p-4 w-3/12">
          <img src="./assets/Woodman Headshot.jpg" alt="headshot" className="border-8 border-[#5BC0BE]" />
        </div>
        <div className="p-4 w-7/12 flex flex-wrap flex-1">
          <div className="flex flex-col m-2 bg-[#5BC0BE] text-black p-4 min-w-[40%] flex-1">
            <h2 className="text-center text-xl font-bold">HOBBIES</h2>
            <li>Watching Sports</li>
            <li>Family Activities</li>
            <li>Attending Live Events</li>
            <li>Solving Problems</li>
            <li>Fixing Bugs in Code</li>
          </div>
          <div className="flex flex-col m-2 bg-[#5BC0BE] text-black p-4 min-w-[40%] flex-1">
            <h2 className="text-center text-xl font-bold">SKILLS</h2>
            <li>Video Content Editing</li>
            <li>Live Event Production</li>
            <li>Ross Xpression Graphics Operation</li>
            <li>Strong Communication Techniques</li>
            <li>Attention to Detail</li>
          </div>
          <div className="flex flex-col m-2 bg-[#5BC0BE] text-black p-4 min-w-[40%] flex-1">
            <h2 className="text-center text-xl font-bold">LANGUAGES</h2>
            <li>Visual Basic</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>TailwindCSS & Bootstrap</li>
            <li>Handlebars & React</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL & Sequelize</li>
            <li>MongoDB & Mongoose</li>
            <li>GraphQL</li>
            <li>RESTful APIs</li>
            <li>JSON</li>
            <li>jQuery</li>
          </div>
          <div className="flex flex-col m-2 bg-[#5BC0BE] text-black p-4 min-w-[40%] flex-1">
            <h2 className="text-center text-xl font-bold">PAST ROLES</h2>
            <li>Director of Broadcast Operations - Northwestern</li>
            <li>Assistant Director of Broadcast Operations - Northwestern</li>
            <li>Assistant Professor - Sports Broadcasting - Western Illinois</li>
            <li>Director of Video Board Operations - Schaumburg Boomers</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
