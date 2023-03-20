import React from "react";
import Nav from "./Nav";

function Header({ currentPage, handlePageChange }) {
  return (
    <div className="bg-[#5BC0BE] p-4">
      <h2 className="text-center text-3xl font-bold">CASEY WOODMAN</h2>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
}

export default Header;
