/* eslint-disable no-unused-vars */
import React from "react";

import Logo from "../assets/images/Logo-1.png";

import { Box, Stack } from "@mui/material";

export const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fdb927">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="" width="200px" height="40px" />
      </Stack>
    </Box>
  );
};
