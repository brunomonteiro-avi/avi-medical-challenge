import React, { useState, useEffect } from "react";

//Custom hook to use the fetch - wanted to use that one but now using the older approach

const useFetch = (url : any, options: any) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    doFetch();
  }, []);
  return { response, error, loading };
};


export default useFetch;