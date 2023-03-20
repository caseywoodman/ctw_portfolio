import React from "react";

function Nav({ currentPage, handlePageChange }) {
  return (
    <div className="w-full bg-[#5BC0BE]">
      <nav className="w-8/12 m-auto p-4" currentPage={currentPage}>
        <button className="p-3 text-xl bg-[#0B132B] text-[#6FFFE9] m-2 w-2/12 rounded-xl" onClick={() => handlePageChange("About")}>
          ABOUT
        </button>
        <button className="p-3 text-xl bg-[#0B132B] text-[#6FFFE9] m-2 w-2/12 rounded-xl" onClick={() => handlePageChange("Projects")}>
          PROJECTS
        </button>
        <button className="p-3 text-xl bg-[#0B132B] text-[#6FFFE9] m-2 w-2/12 rounded-xl" onClick={() => handlePageChange("Contact")}>
          CONTACT
        </button>
      </nav>
    </div>
  );
}

export default Nav;
