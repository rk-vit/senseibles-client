import React, { useState, useEffect } from "react";
import axios from "axios";

const Check = () => {
  const [data, setData] = useState("Loading...");

  useEffect(() => {
    axios.get("https://senseibles-server.vercel.app/check")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setData("Error loading data");
      });
  }, []);

  return <h1>{data}</h1>;
};

export default Check;
