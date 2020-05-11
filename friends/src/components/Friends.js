import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Friends = (props) => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    const friends = (e) => {
      e.preventDefault();
      axiosWithAuth()
        .get("/friends")
        .then((res) => {
          console.log(res.data);
          setFriend(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }, []);

  return (
    <div>
      <h1>Friends List</h1>
    </div>
  );
};

export default Friends;
