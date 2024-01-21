import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "inspector";

const useFetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const user_id = localStorage.getItem("userId");
    axios
      // .get(`http://127.0.0.1:8000/history/${user_id}`)
      .get(`${process.env.NEXT_PUBLIC_BASEURL}/history/${user_id}` || "")
      .then((response) => {
        // Assuming the response structure is similar to the JSON you provided
        const formattedData = response.data.urls.map(
          (item: any, index: any) => ({
            id: index + 1, // Use another value for ID as needed
            document: item.government, // And/or other fields from the item
            url: item.url,
          })
        );
        setData(formattedData);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return { data };
};

export default useFetchData;
