import React, { useState } from "react";
import axios from "axios";
const URL = "http://localhost:9000/api/friends";
const AddFriend = () => {
  const token = localStorage.getItem("token");

  const initialNewFriend = {
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  };
  const handleChange = (e) => {
    setNewFriend({ ...newFriend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(URL, newFriend, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => console.log(res), setNewFriend(initialNewFriend))
      .catch((err) => console.error(err));
  };

  const [newFriend, setNewFriend] = useState(initialNewFriend);
  return (
    <div>
      <h2>Add Friend</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            value={newFriend.name}
            name="name"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="Age">Age</label>
          <input
            onChange={handleChange}
            value={newFriend.age}
            name="age"
            id="Age"
          />
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            onChange={handleChange}
            value={newFriend.email}
            name="email"
            id="Email"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFriend;
