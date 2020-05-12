import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";



const Friends = (props) => {
  const [edit, setEdit] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .put("/friends/:id")
      .then((res) => {
        console.log(res.data);
        setEdit(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <AddFriend/>
      {friend.map((homies) => {
        const { id } = homies;
        return (
          <Link key={id} to={`/friends/${id}`}>
            <StyledFriends>
              <h1>Name: {homies.name}</h1>
              <h3>age: {homies.age}</h3>
              <h3>email: {homies.email}</h3>
            </StyledFriends>
          </Link>
        );
      })}
    </div>
  );
};

export default Friends;