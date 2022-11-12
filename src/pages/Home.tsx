import React from "react";
import Button from "@mui/material/Button";

async function register() {
  const response: any = await fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Jakob",
      password: "123",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  console.log(response);
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button variant="contained" onClick={register}>
        Register
      </Button>
    </div>
  );
}

export default Home;
