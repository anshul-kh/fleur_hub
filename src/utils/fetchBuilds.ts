import axios from "axios";

const fetchBuilds = async (id: number) => {
  const baseUrl = await import.meta.env.VITE_API_URL;
  try {
    const data = await axios.get(`${baseUrl}/rom/${id}`);

    if (data === null || data === undefined || data.data.data[0].length === 0)
      return { success: false, err: "Error While Fetching The Data" };

    return data.data;
  } catch (e) {
    return { success: false, err: `${e}` };
  }
};
export default fetchBuilds;
