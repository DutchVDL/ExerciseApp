/* eslint-disable no-unused-vars */
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import HeroBannerImg from "../assets/images/banner.png";
import KobeCoverImg from "../assets/images/kobe_2_getty_ringer.0.jpg";

export const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#552583" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective Exercises
      </Typography>
      <Button
        variant="contained"
        // color="error"
        href="#exercises"
        sx={{ backgroundColor: "#552583", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        fontSize="200px"
        color="#552583"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercise
      </Typography>
      <img src={KobeCoverImg} alt="Banner" className="hero-banner-image" />
    </Box>
  );
};
