import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:9000/api/logout";

const Logout = () => {
  const push = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:9000/api/logout",
        {},
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => {
        console.log(res), localStorage.removeItem("token"), push("/login");
      })
      .catch((err) => console.error(err));
  }, []);
  return <div></div>;
};

export default Logout;
