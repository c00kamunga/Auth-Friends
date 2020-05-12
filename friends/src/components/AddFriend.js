import React, { useState } from 'react';
import { axiosWithAuth } from '../axiosWithAuth';
import styled from 'styled-components';


const StyledAdder = styled.div`
text-align: center;
border: 3px solid green;
width: 28.2%;
margin: 0 auto;
`


const AddFriend = (props) => {
    const [addFriend, setAddFriend] = useState([]);
   
     const addOneFriend = e => {
       e.preventDefault();
       id:Date.now()
       axiosWithAuth()
       .post("/friends", addOneFriend)
         .then(res => {
            console.log(res)
            props.setFriend(res.data)
         })
     }
   
     const handleChange = e => {
         setAddFriend({
           ...addFriend,
           [e.target.name]: e.target.value,
     })
     }
   
       return (
         <StyledAdder>
           <form onSubmit={addOneFriend}>
             <input
               type="text"
               name="age"
               value={addFriend.age}
               onChange={handleChange}
               placeholder="age"
             />
             <input
               type="email"
               name="email"
               value={addFriend.email}
               onChange={handleChange}
               placeholder="email"
             />
             <input
               type="text"
               name="name"
               value={addFriend.name}
               onChange={handleChange}
               placeholder="name"
             />
             <button>Add Friend</button>
           </form>
         </StyledAdder>
       )
   }
   
   export default AddFriend;