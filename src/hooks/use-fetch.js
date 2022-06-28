// Tam dung quay lai sau

import { useState, useCallback } from "react";

const useFetch = () => {
  const [dataRender, setDataRender] = useState([]);

  const fetchShoesSale = useCallback(async function () {
    const response = await fetch(
      "https://project-react-cf626-default-rtdb.firebaseio.com/sales.json"
    );
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await response.json();
    // const { item1, item2, ...restItems } = data;
    // console.log(Object.values(data));
    const dataValue = Object.values(data);
    // setDataRender(dataValue.slice(2));
    return dataValue.slice(2);
  }, []);

  return fetchShoesSale;
};

export default useFetch;
