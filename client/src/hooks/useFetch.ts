import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

import { API_URL, STRAPI_API_TOKEN } from "../constants";
import { ItemIProps } from "../types/data";

const useFetch = (endpoint: string, method: "GET" | "POST" | "PUT" | "DELETE", query?: any) => {
  const [data, setData] = useState<ItemIProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const options: AxiosRequestConfig = {
    method: method,
    url: `${API_URL}/${endpoint}?populate=*`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      // const response = await axios.request(options);
      const response = await axios.get("https://reactnative.dev/movies.json");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
