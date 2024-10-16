import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, Footer, Table, Row } from "../components";
import toast from "react-hot-toast";
import { fetchBuilds } from "../utils";

type BuildProps = {
  tested: boolean;
  id: number;
  rom_id: number;
  modified: string;
  download: string;
};

type DataProps = {
  android_version: number;
  build: BuildProps[];
  discription: string;
  id: number;
  name: string;
  tested: boolean;
};

const Builds: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataProps | null>(null);
  const [build, setBuild] = useState<BuildProps[] | null>(null);

  useEffect(() => {
    async function getBuilds(id: number) {
      setLoading(true);
      try {
        const res = await fetchBuilds(id);
        if (res.success) {
          if (res.data && Array.isArray(res.data)) {
            setData(res.data[0]);
            setBuild(res.data[0].build || []);
          } else {
            toast.error("Invalid data format");
          }
        } else {
          toast.error("Error While Fetching Builds");
          if (res.err) {
            toast.error(res.err);
          }
        }
      } catch (error) {
        console.error(error);
        toast.error("Unexpected Error");
      } finally {
        setLoading(false);
      }
    }

    if (id === undefined) {
      toast.error("Cannot Get Build ID");
      return;
    }

    getBuilds(Number(id));
  }, [id]);

  console.log(build, loading);

  return (
    <div className="min-w-screen min-h-screen w-full h-full flex justify-center items-center bg-black">
      <Nav />

      {loading && (
        <p className="text-transparent bg-gradient-to-b bg-clip-text from-white to-transparent">
          {" "}
          Loading (Wait a sec)...{" "}
        </p>
      )}
      {!loading && data === null && (
        <p className="text-transparent bg-gradient-to-b bg-clip-text from-white to-transparent">
          {" "}
          Invalid Response From Server, We Will Fix It Soon{" "}
        </p>
      )}

      {!loading && data !== null && (
        <div className="w-3/4 flex justify-center items-center flex-col gap-3">
          <p className="bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent text-2xl text-center">
            {" "}
            {data.name}{" "}
          </p>

          <p className="text-white text-center bg-white bg-opacity-20 rounded-xl md:w-4/6 p-2">
            {" "}
            {data.discription}{" "}
          </p>

          <Table>
            {build &&
              build.map((item) => (
                <Row
                  key={item.id} // Ensure each child has a unique key
                  index={item.id} // Use a unique identifier or index if needed
                  date={item.modified}
                  tested={item.tested}
                  link={item.download}
                />
              ))}
          </Table>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Builds;
