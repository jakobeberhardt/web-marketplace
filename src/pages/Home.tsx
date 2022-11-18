import { Card, Typography } from "@mui/material";
import React from "react";
import Lottie from "react-lottie-player";
import truckLottie from "./../LottieGraphics/car-loading.json";

function Home() {
  return (
    <>
      <Card style={{ padding: "50px", margin: "auto" }}>
        <Typography
          variant="h4"
          component="h3"
          style={{ padding: "50px", margin: "auto" }}
        >
          Willkommen auf dem NeoCargo Bieterportal!
        </Typography>
        <Lottie
          loop
          animationData={truckLottie}
          play
          style={{ width: 400, height: 400, margin: "auto" }}
        />
      </Card>
    </>
  );
}

export default Home;
