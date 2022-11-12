import React, { useState } from "react";
import { Input, Button } from "@mui/material";
import userObject from "../components/user/UserSingleton";

function register(username: String, password: String) {
  fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function login(username: String, password: String) {
  fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      userObject.accessToken = data.accessToken;
      userObject.userId = data.userId;
      userObject.refreshToken = data.refreshToken;
      console.log(data, userObject);
    });
}

function getUserData(userId: String, accessToken: String) {
  console.log(userId);
  fetch(`http://localhost:8080/api/users/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + accessToken,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <Input
          placeholder="Username"
          value={username}
          onChange={handleChangeUsername}
        />
        <Input
          placeholder="Password"
          value={password}
          onChange={handleChangePassword}
        />
        <Button
          variant="contained"
          onClick={() => register(username, password)}
        >
          Register
        </Button>
        <Button variant="outlined" onClick={() => login(username, password)}>
          Login
        </Button>
        <Button
          variant="outlined"
          onClick={() => getUserData(userObject.userId, userObject.accessToken)}
        >
          GetUserData
        </Button>
      </div>
    </>
  );
}

export default Home;
