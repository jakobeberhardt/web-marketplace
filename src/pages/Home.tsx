import { Card, Typography } from "@mui/material";
import React from "react";
import Lottie from "react-lottie-player";
import truckLottie from "./../LottieGraphics/car-loading.json";

function Home() {
  return (
    <>
      <Card style={{ padding: "50px" }}>
        <Typography variant="h3" component="h3">
          Bitte loggen Sie sich ein, um Ihre Aktivitäten einsehen zu können.
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
