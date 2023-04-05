import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:9000/api/friends";
const FriendList = () => {
  const [friends, setFriends] = useState([]);
  const [buffer, setBuffer] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(URL, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h2>Friend List</h2>
      <ul>
        {friends.map((friend) => (
          <li
            key={friend.id}
          >{`${friend.name} - ${friend.age} - ${friend.email}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
