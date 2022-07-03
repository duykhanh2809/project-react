// Tam dung quay lai sau

import { useState, useCallback } from "react";

const useFetch = () => {
  const [dataRender, setDataRender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const fetchShoesSale = useCallback(async function (
    url,
    applyFunction = null
  ) {
    setIsLoading(true);
    setHasError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      const dataValue = Object.values(data);

      // custom
      applyFunction ? applyFunction(dataValue) : setDataRender(dataValue);
    } catch (error) {
      setHasError("Something went wrong");
    }
    setIsLoading(false);
  },
  []);

  return { isLoading, hasError, dataRender, fetchShoesSale };
};

export default useFetch;
