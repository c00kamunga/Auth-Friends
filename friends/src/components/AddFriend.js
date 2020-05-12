import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../axiosWithAuth';

const AddFriend = (props) => {
    const [addFriend, setAddFriend] = useState([]);
   
     const addOneFriend = e => {
       e.preventDefault();
       id:Date.now()
       axiosWithAuth()
       .post("/friends", state.addOneFriend)
         .then(res => {
           localStorage.setItem('token', res.data.payload);
           props.history.push('/protected');
         })
     }
   
     const handleChange = e => {
         setAddFriend({
           ...state.addOneFriend,
           [e.target.name]: e.target.value,
     })
     }
   
       return (
         <div>
           <form onSubmit={addOneFriend}>
             <input
               type="text"
               name="age"
               value={addFriend.age}
               onChange={handleChange}
             />
             <input
               type="email"
               name="email"
               value={addFriend.email}
               onChange={handleChange}
             />
             <input
               type="text"
               name="name"
               value={addFriend.name}
               onChange={handleChange}
             />
             <button>Add Friend</button>
           </form>
         </div>
       )
   }
   
   export default Login;