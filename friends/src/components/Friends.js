import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFriends = styled.div`
  border: 3px solid black;
`;

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
