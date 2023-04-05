import React from "react";
import "./App.css";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import Logout from "./components/Logout";
import Protected from "./components/Protected";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Friends Database</h2>
        <Link className="links" to="login">
          Login
        </Link>
        <Link className="links" to="friends">
          Friends
        </Link>
        <Link className="links" to="friends/add">
          Add Friends
        </Link>
        <Link className="links" to="logout">
          Logout
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/friends"
          element={
            <Protected>
              <FriendList />
            </Protected>
          }
        />

        <Route
          path="/friends/add"
          element={
            <Protected>
              <AddFriend />
            </Protected>
          }
        />

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
