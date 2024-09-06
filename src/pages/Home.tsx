import React from "react";
import { Footer, Nav } from "../components";
import { Search } from "../assets";

const Home: React.FC = () => {
  return (
    <div className="w-full  flex justify-center gap-10 items-center flex-col min-w-screen min-h-screen h-full bg-black p-2 ">
      <Nav />
      <div className="w-1/2 z-10 h-[50vh] rounded-full bg-blue-700 absolute mt-40 bg-opacity-35 drop-shadow-2xl blur-3xl"></div>

      <div className=" z-20 text-white flex justify-center items-center gap-2 md:gap-5 flex-col">
        <p className="bg-gradient-to-b bg-clip-text text-transparent from-white text-xl font-semibold to-transparent">
          Welcome
        </p>
        <p className="flex justify-center items-center gap-2 w-full md:gap-4 text-2xl text-center md:text-5xl text-nowrap flex-wrap">
          <span className="text-3xl md:text-5xl font-semibold bg-gradient-to-b  from-[#00FFC2] text-nowrap to-transparent bg-clip-text text-transparent ">
            {" "}
            A HUB{" "}
          </span>
          Of All The Roms Avaliable{" "}
        </p>
        <p className="inline-flex justify-center items-center gap-4 text-2xl  md:text-5xl">
          For{" "}
          <span className="text-2xl md:text-5xl font-semibold bg-gradient-to-b  from-[#00FFC2]  to-transparent bg-clip-text text-transparent">
            {" "}
            Fleur{" "}
          </span>{" "}
          Device
        </p>
        <p className="text-opacity-95 w-full text-white text-wrap text-center md:w-3/5">
          Your one-stop destination for every ROM available for the Fleur
          device. Discover, download, and optimize your Fleur experience with
          ease.
        </p>
      </div>

      <div
        onClick={() => (window.location.pathname = "/roms")}
        className="z-20  md:w-3/12 rounded-full cursor-text inline-flex overflow-hidden gap-1 justify-between pl-4 pr-2 text-white text-opacity-55 items-center  h-11 border-blue-700 border-2"
      >
        {" "}
        Explore World Of Custom Roms...{" "}
        <img src={Search} className="w-7 h-7" alt="s" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
