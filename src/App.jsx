import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";

import { Footer } from "./components/Footer";
import { ExerciseDetail } from "./components/ExerciseDetail";

function App() {
  return (
    <BrowserRouter>
      <Box width="400px" sx={{ width: { x1: "1488px" } }} m={"auto"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
