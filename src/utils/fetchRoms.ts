import axios from "axios";

const fetchRoms = async () => {
  const baseUrl = await import.meta.env.VITE_API_URL;
  console.log(baseUrl);
  try {
    const data = await axios.get(`${baseUrl}/roms`);

    if (data === null || data === undefined || data.data.data[0].length === 0)
      return { success: false, err: "Error While Fetching The Data" };

    return data.data;
  } catch (e) {
    return { success: false, err: `${e}` };
  }
};
export default fetchRoms;
