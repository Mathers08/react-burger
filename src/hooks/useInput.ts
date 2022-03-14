import React, {useState} from "react";

const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return {
    value,
    onChange: handleChange
  }
};

export default useInput;