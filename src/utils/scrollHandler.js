const scrollHandler = (e, news, totalCount, setFetching) => {
  const scrollRule =
    e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight) <
    100;
  const totalAmountRule = news.length.toString() < totalCount.toString();
  const check = () =>
    totalAmountRule && scrollRule ? setFetching(true) : setFetching(false);
  check();
};

export default scrollHandler;
