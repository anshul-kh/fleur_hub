import React, { useEffect, useState } from "react";
import { Nav, Footer, Card } from "../components";
import { fetchRoms, romImages } from "../utils";
import toast from "react-hot-toast";
import { Input } from "@nextui-org/react";

interface romsProps {
  id: number;
  name: string;
  tested: boolean;
  build: any;
  android_version: number;
  discription: string;
}

const Roms: React.FC = () => {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getRoms() {
      setloading(true);
      const res = await fetchRoms();

      if (res.success) {
        if (res.data !== null || res.data !== undefined) setData(res?.data);
        setloading(false);
      } else {
        toast.error("Error While Fetching Roms");
        if (res.err) {
          setloading(false);
          toast.error(res.err);
        }
      }
    }

    getRoms();
  }, []);

  return (
    <div className="w-full h-full min-h-screen min-w-screen bg-black flex justify-start pt-32 items-center flex-col">
      <Nav />

      <div className="flex flex-col justify-start items-center gap-7">
        <h1 className="text-xl md:text-3xl bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent p-3  text-center">
          {" "}
          Explore A New World For Your Device{" "}
        </h1>

        <Input
          variant="bordered"
          className="w-2/6 text-white "
          placeholder="Search Your Favourite Rom"
        />

        <div className="flex justify-center items-center w-5/6 flex-wrap gap-10">
          {!loading &&
            data !== null &&
            Object.keys(data).map((key, index) => {
              const { id, tested, android_version, name } = data[key];
              return (
                <Card
                  version={android_version}
                  tested={tested}
                  name={name}
                  img={romImages[id - 1]}
                  key={index}
                  id={id}
                />
              );
            })}

          {loading && (
            <h1 className="text-2xl bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent">
              Loading (Wait a sec)...
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Roms;
