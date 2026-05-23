import { useEffect } from "react";
import { useState } from "react";

const url = "https://dorsavali.github.io/SaaS-with-daisy-react/db.json";

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
    fetchData();
  }, []);
  return data;
};

export default CustomFetch;
