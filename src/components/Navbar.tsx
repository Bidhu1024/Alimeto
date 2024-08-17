import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Logo from "../svg/Logo";
import "@fontsource/roboto";
const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={".2rem"}
    >
      <Box>
        <Typography fontFamily={"math"} variant="h5" fontWeight={"bold"}>
          Alimento
        </Typography>
      </Box>
      <Box
        display={"flex"}
        width="30rem"
        gap={"1.4rem"}
        justifyContent={"space-evenly"}
        padding={".5rem"}
        boxShadow={"1"}
        borderRadius={"10px"}
      >
        <Typography sx={{ fontSize: "1rem", fontFamily: "system-ui",cursor:"pointer" }}>
          Home
        </Typography>
        <Typography sx={{ fontSize: "1rem", fontFamily: "system-ui",cursor:"pointer" }}>
          Resturants
        </Typography>
        <Typography sx={{ fontSize: "1rem", fontFamily: "system-ui",cursor:"pointer" }}>
          Contact us
        </Typography>
        <Typography sx={{ fontSize: "1rem", fontFamily: "system-ui",cursor:"pointer" }}>
          Favs
        </Typography>
        <AddShoppingCartIcon />
      </Box>
      <Button variant="contained">Login/Signup</Button>
    </Box>
  );
};

export default Navbar;
