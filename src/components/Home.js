import React, { useState } from "react";

import Nav from "./Nav";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Home() {
  const [currentPage, setCurrentPage] = useState("Projects");

  const renderPage = () => {
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="w-full text-[#6FFFE9] flex-1 flex flex-col">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}

export default Home;
