import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Friends = (props) => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res.data);
        setFriend(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      
    <div>
      {friend.map(homies => (
          <>
        <h1>Name: {homies.name}</h1>
        <h3>age: {homies.age}</h3>
        <h3>email: {homies.email}</h3>
        </>
      ))}
    </div>
    
  );
};

export default Friends;
