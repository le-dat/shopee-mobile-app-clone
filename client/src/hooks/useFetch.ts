import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

import { API_URL, STRAPI_API_TOKEN } from "../constants";
import { ResponseArrayIProps } from "../types/data";

interface IProps {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  query?: any;
}

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${STRAPI_API_TOKEN}`,
};

const useFetch = ({ endpoint = "", method = "GET", query = {} }: IProps) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const options: AxiosRequestConfig = {
    method,
    url: `${API_URL}/api/${endpoint}`,
    headers,
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
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
