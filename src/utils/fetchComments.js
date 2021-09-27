import axios from "axios";

const fetchComments = async (url, comments, setState, setError, setLoading) => {
  const checkLoading = () =>
    comments.length === 0 ? setLoading(true) : setLoading(false);

  checkLoading();

  try {
    const response = await axios.get(url);
    const { data } = response;
    if (data) {
      setState([...data]);
      setLoading(false);
    }
  } catch (error) {
    setError(error.message);
    setLoading(false);
  } finally {
    setLoading(false);
  }
};

export default fetchComments;
