import { useState } from "react";

export const useLocalStorage = () => {
  const [localstate, setLocalstate] = useState({});

  const getLocalValue = (method = "",key) => {
    if (method == "clear") setLocalstate("");
    else {
     let value = sessionStorage.getItem(key);
      setLocalstate({...localstate,[key]:value});
    }
  };
  const setLocalValue = (value, key) => {
    sessionStorage.setItem(key, value);
    setLocalstate({ ...localstate, [key]: value });
  };

  const clearSession=()=>{
    sessionStorage.clear();
    setLocalstate({})
  }

  return { getLocalValue, setLocalValue,localstate,clearSession };
};
