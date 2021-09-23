import axios from "axios";

export const fetchData = async (url, setState, setError, setLoading) => {
  setLoading(true);
  try {
    const response = await axios.get(url);
    const { data } = response;
    if (data) {
      setState(data);
      setLoading(false);
    }
  } catch (error) {
    setError(error);
    setLoading(false);
  } finally {
    setLoading(false);
  }
};
