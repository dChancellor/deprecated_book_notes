import { useState, useEffect } from 'react';

const useGetRequest = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let prevent = false;
    if (url) {
      const fetchData = async () => {
        try {
          setLoading(true);
          let response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!prevent) setData(await response.json());
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
    return () => {
      prevent = true;
    };
  }, [url]);
  return { data, loading, error };
};

export default useGetRequest;
