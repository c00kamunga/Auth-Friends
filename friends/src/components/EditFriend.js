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

  return <div>
<form>
    <input
    type="text"
    name="age"
    />
    <input
    type="email"
    name="email"
    />
    <input
    type="text"
    name="name"
    />
</form>

  </div>;
};

export default Friends;
