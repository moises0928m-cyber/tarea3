import React from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <div className="p-5">
        <Header />
        <Cards />
      </div>
    </>
  );
}
