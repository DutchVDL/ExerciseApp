/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import React, { useState } from "react";
import { HeroBanner } from "./HeroBanner";
import { SearchExercises } from "./SearchExercises";

import { Exercises } from "./Exercises";

export const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState(["all"]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        bodyPart={bodyPart}
        setExercises={setExercises}
        setBodyPart={setBodyPart}
      />
      <Exercises
        bodyPart={bodyPart}
        setExercises={setExercises}
        exercises={exercises}
      />
    </Box>
  );
};
