/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import { useEffect, useState } from "react";
// import Pagination from "@mui/material/Pagination";
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../services/fetchData";
import ExerciseCard from "./ExerciseCard";

// import ExerciseCard from "./ExerciseCard";
// import { Loader } from "./Loader";

export const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };
    // fetchExerciseData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Stack
          direction="row"
          sx={{ gap: { lg: "107px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {currentExercises.map((exercise, index) => (
            // <ExerciseCard key={idx} exercise={exercise} />
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises && exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};
