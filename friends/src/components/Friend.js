import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import styled from "styled-components";
import EditFriend from './EditFriend'

const StyledFriends = styled.div`
  border: 3px solid black;
  padding: 1rem;
`;





const Friend = (props) => {
  const [oneFriend, setOneFriend] = useState([]);

  const id = props.match.params.id
  
  
  useEffect(() => {
    
    console.log(props)
    axiosWithAuth()
    .get(`/friends/${id}`)
    .then((res) => {
      console.log(res.data);
      setOneFriend(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [props,id]);

  return (
    <div>
      <StyledFriends>
        <h1>Name: {oneFriend.name}</h1>
        <h3>age: {oneFriend.age}</h3>
        <h3>email: {oneFriend.email}</h3>
      <EditFriend oneFriend={oneFriend}/>
      </StyledFriends>
    </div>
  );
};

export default Friend;
