import React, { useState } from "react";
import { Input, Button } from "@mui/material";
import userObject from "../components/user/UserSingleton";
import axios from "axios";

function register(username: String, password: String) {
  axios
    .post(
      "https://api.jeberhardt.dev/api/v1/auth/register",
      { "username": username, "password": password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((data) => console.log(data.data.accessToken))
    .catch(console.log);
}

function login(nutzername: String, passwort: String) {
  axios
    .post(
      "https://api.jeberhardt.dev/api/v1/auth/login",
      {
        username: nutzername,
        password: passwort,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((data) => {
      userObject.accessToken = data.data.accessToken;
      userObject.userId = data.data.userId;
      userObject.refreshToken = data.data.refreshToken;
      console.log(data.data, userObject.accessToken);
      Object.freeze(userObject);
    })
    .catch(console.log);
}

function getUserData(userId: String, accessToken: String) {
  console.log(`Bearer ${accessToken}`);
  axios
    .get("https://api.jeberhardt.dev/api/v1/biddings/", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch(console.log);
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
