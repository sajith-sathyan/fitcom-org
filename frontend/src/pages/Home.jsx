// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import CalorieCard from "../components/CalorieCard";
import Banner from "../components/Banner";
import MacrosCard from "../components/MacrosCard";

function Home() {
  return (
    <>
      <Navbar />
      <div class="main-content">
        <Banner />
        <CalorieCard />
        <MacrosCard/>
      </div>
    </>
  );
}

export default Home;
