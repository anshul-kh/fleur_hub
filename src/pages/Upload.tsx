import React, { useState } from "react";
import { Footer, Nav } from "../components";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import axios from "axios";
import toast from "react-hot-toast";

const Upload: React.FC = () => {
  const [form, setform] = useState({
    rom_id: "",
    date: "",
    tested: "",
    url: "",
  });

  const postData = async () => {
    const url = "https://fleur-roms-api.onrender.com/build";
    setLoading(true);
    if (
      form.rom_id === "" ||
      form.date === "" ||
      form.tested === "" ||
      form.url === ""
    ) {
      toast.error("Empty Data Not Allowed");
      setLoading(false);
      return;
    }

    const data = {
      rom_id: Number(form.rom_id),
      date: form.date,
      tested: Boolean(form.tested),
      download: form.url,
    };

    try {
      const response = await axios.post(url, data);
      console.log("Response:", response.data);
      if (response) {
        const id = form.rom_id;
        setform({
          rom_id: "",
          date: "",
          tested: "",
          url: "",
        });
        toast("Successfully Added Record");
        setTimeout(() => (window.location.pathname = `/builds/${id}`), 1000);
      } else {
        toast.error("Something went Wrong");
      }
      setLoading(false);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message,
      );
      toast.error(`${error}`);
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(false);

  const handleFormChange = (key, value) => {
    switch (key) {
      case "rom_id":
        setform((prev) => ({ ...prev, rom_id: value }));
        break;
      case "tested":
        setform((prev) => ({ ...prev, tested: value }));
        break;
      case "date":
        setform((prev) => ({ ...prev, date: value }));
        break;
      case "url":
        setform((prev) => ({ ...prev, url: value }));
        break;
    }
  };

  return (
    <div className="bg-black w-full h-full min-h-screen flex p-10 md:pt-20 justify-start items-center flex-col gap-7">
      <Nav />

      <div className="md:text-3xl text-xl text-transparent text-white mt-10 font-semibold">
        Upload New Build
      </div>

      <div className="w-full md:w-1/3 flex justify-center items-center gap-6 flex-col">
        <Input
          className="w-full h-12 text-white"
          type="text"
          label="Rom ID"
          variant="bordered"
          value={form.rom_id}
          onChange={(e) => handleFormChange("rom_id", e.target.value)}
          disabled={loading}
        />
        <Input
          className="w-full h-12 text-white "
          type="text"
          label="DD-MM-YYYY"
          variant="bordered"
          value={form.date}
          onChange={(e) => handleFormChange("date", e.target.value)}
          disabled={loading}
        />
        <Input
          className="w-full h-12 text-white"
          type="text"
          label="Tested"
          variant="bordered"
          value={form.tested}
          onChange={(e) => handleFormChange("tested", e.target.value)}
          disabled={loading}
        />
        <Input
          className="w-full h-12 text-white"
          type="text"
          label="Download URL"
          variant="bordered"
          value={form.url}
          onChange={(e) => handleFormChange("url", e.target.value)}
          disabled={loading}
        />

        <Button
          className="text-white w-full h-12"
          color="primary"
          disabled={loading}
          onClick={postData}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Upload;
