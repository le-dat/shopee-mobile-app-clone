import { useEffect, useState } from "react";

interface IProps {
  value: string;
  delay?: number;
}
const useDebounce = ({ value = "", delay = 500 }: IProps) => {
  const [debounceValue, setDebounceValue] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(handler);
  }, [delay, value]);

  return debounceValue;
};

export default useDebounce;
