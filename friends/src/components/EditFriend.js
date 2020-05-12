import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const EditFriend = (props) => {
  const [edit, setEdit] = useState({ age: "", email: "", name: "" });

  const changeHandler = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    axiosWithAuth()
      .put(`/friends/${props.oneFriend.id}`, edit)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="age"
          value={edit.age}
          onChange={changeHandler}
          placeholder="Edit Age"
        />
        <input
          type="email"
          name="email"
          value={edit.email}
          onChange={changeHandler}
          placeholder="Edit Email"
        />
        <input
          type="text"
          name="name"
          value={edit.name}
          onChange={changeHandler}
          placeholder="Edit Name"
        />
        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditFriend;
