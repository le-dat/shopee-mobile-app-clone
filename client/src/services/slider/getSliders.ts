import { SliderIProps } from "../../types/slider";
import httpRequest from "../../utils/httpRequest";

const getSliders = async () => {
  const response = await httpRequest.get<SliderIProps[]>(`/sliders`);
  return response.data;
};

export default getSliders;
