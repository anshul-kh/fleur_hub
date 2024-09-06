import React from "react";
import { Nav, Footer } from "../components";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-black">
      <Nav />

      <div className="flex flex-col justify-center items-center gap-7">
        <p className="bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent text-xl md:text-3xl text-center ">
          {" "}
          Want To Know About Fleur_Hub{" "}
        </p>

        <p className="md:text-xl text-white text-opacity-95 md:w-2/4 p-2 text-center">
          {" "}
          The Fleur ROM API is a Flask-based API that provides a streamlined and
          platform-specific solution for retrieving all available custom ROMs
          for the device Fleur (Poco M4 Pro 4G). This API offers a centralized
          resource for developers and enthusiasts to access and manage custom
          ROM data, ensuring easy integration and up-to-date information on ROM
          availability for this specific device.{" "}
        </p>

        <ButtonGroup>
          <Button variant="bordered" className="text-white" as={Link} to={"/"}>
            {" "}
            GitHub (Frontend){" "}
          </Button>
          <Button
            variant="bordered"
            className="text-white"
            as={Link}
            to={"https://github.com/anshul-kh/fleur-roms-api"}
          >
            {" "}
            GitHub (Server){" "}
          </Button>
        </ButtonGroup>
      </div>

      <Footer />
    </div>
  );
};

export default About;
