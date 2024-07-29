import { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface UseFetchDataResult<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

const useFetchData = <T,>(apiCall: () => Promise<T>): UseFetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiCall();
        setData(result);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiCall]);

  return { data, loading, error };
};

export default useFetchData;
