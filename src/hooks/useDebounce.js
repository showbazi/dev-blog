import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
      const handleChange = setTimeout(() => {
        setDebounceValue(value);
      }, delay);
    
      return () => {
        clearTimeout(handleChange);
      }
    }, [value, delay])

    return debounceValue;
}

export default useDebounce;