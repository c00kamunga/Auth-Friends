import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Friends = (props) => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
      axiosWithAuth()
        .get("/friends")
        .then((res) => {
          console.log(res);
          setFriend(res);
        })
        .catch((err) => {
          console.log(err);
        });
    
}, []);

  return (
    <div>
      <h1>Friends List</h1>
    </div>
  );
};

export default Friends;
