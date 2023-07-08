import { SliderIProps } from "../../types/slider";
import httpRequest from "../../utils/httpRequest";

interface IProps {
  sliders: SliderIProps[];
}

const getSliders = async () => {
  const response = await httpRequest.get<IProps>(`/sliders`);
  return response.data.sliders;
};

export default getSliders;
