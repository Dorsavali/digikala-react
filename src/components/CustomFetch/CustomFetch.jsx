import { useEffect } from "react";
import { useState } from "react";

const url = "http://localhost:5173/db.json";

const CustomFetch = (section) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const resJson = await response.json();
      setData(resJson[section]);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);
  return data;
};

export default CustomFetch;
