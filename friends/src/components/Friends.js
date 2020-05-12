import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import { Link } from "react-router-dom";
import AddFriend from "./AddFriend";
import styled from "styled-components";


const StyledFriends = styled.div`
  border: 3px solid black;
  width: 40%;
  margin: 0 auto;
  margin-top: 1rem;
  padding-left: 2rem;
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
      <AddFriend setFriend={setFriend} />
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
