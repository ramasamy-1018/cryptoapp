import { useSelector } from "react-redux";

const useFetchData = () => {
  const data = useSelector(store => store.token.tokenData);
  const selectedToken = useSelector(store => store.token.selectedToken);
  return [data,selectedToken]
};

export default useFetchData;
