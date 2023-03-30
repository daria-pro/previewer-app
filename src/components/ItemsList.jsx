import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemsList() {
  const [list, setList] = useState([]);
  const BASE_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios.get(BASE_URL).then((data) => {
      console.log(data);
      setList(data?.data);
    });
  }, []);

  return (
    <div>
      {list.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ItemsList;
