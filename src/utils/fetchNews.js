import axios from "axios";

export const fetchNews = async (
  url,
  setState,
  news,
  setError,
  setLoading,
  setCurrentPage,
  setFetching,
  setTotalCount
) => {
  const checkLoading = () =>
    news.length === 0 ? setLoading(true) : setLoading(false);
  checkLoading();
  try {
    const response = await axios.get(url);
    const { data } = response;
    if (data) {
      setState([...news, ...data]);
      setLoading(false);
      setCurrentPage((prevState) => prevState + 1);
      setTotalCount(response.headers["x-total-count"]);
    }
  } catch (error) {
    setError(error.message);
    setLoading(false);
    setFetching(false);
  } finally {
    setLoading(false);
    setFetching(false);
  }
};
