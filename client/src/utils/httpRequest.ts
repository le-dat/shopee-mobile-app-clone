import axios from "axios";
import { STRAPI_API_TOKEN } from "../constants";

const httpRequest = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer 14359afb148b98778e6dac9870984ccb598aa95a0d5d138c6c1e483a9b994429e69e999998e69969dd95880520ed054da2394a7459fc4fe45cccda0f0b191f30387bea72fbe50376b26207bcdbcb5604b62299eda80775d8beb7cf0e785879fbd73c6bd6d1c628fba922b5f1ace3978d877a4858b237123b985164eed75bdeff`,
  },
});

export default httpRequest;
