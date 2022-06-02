import React, { useState, useEffect } from "react";

const useFilterHook = (data, rating, distance, price) => {
  const [newData, setNewData] = useState([]);

  console.log(rating);
  useEffect(() => {
    if (rating) {
      const newData = data?.filter(
        (el) => el.rating >= rating && el.rating <= rating + 1
      );
    }

    if (distance)
      setNewData(data?.filter((el) => Number(el.distance) <= distance));
  }, [rating, price, distance]);
  return [newData, setNewData];
};

export default useFilterHook;
