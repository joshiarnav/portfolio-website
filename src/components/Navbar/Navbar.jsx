import React from "react";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
  Box,
  Link,
} from "@mui/material";
import "./Navbar.css";

const NavLink = (props) => {
  return (
    <Typography variant="h6">
      <Link
        color={"inherit" || props.color}
        underline={"none" || props.underline}
        href={props.href}
      >
        {props.children}
      </Link>
    </Typography>
  );
};

const Navbar = () => {
  return (
    // <Box className="navbar">
    //   <Grid
    //     container
    //     direction="row"
    //     justifyContent="space-between"
    //     alignItems="center"
    //   >
    //     <Grid item xs={3}>
    //       <Typography variant="h6">&lt;arnav.dev/&gt;</Typography>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <Typography variant="h6">&lt;arnav.dev/&gt;</Typography>
    //     </Grid>
    //   </Grid>
    // </Box>
    // {/* <div position="fixed" className="navbar">
    //   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //     &lt;arnav.dev/&gt;
    //   </Typography>
    // </div> */}
    <div className="navbar">
      <NavLink href="#">&lt;arnav.dev/&gt;</NavLink>
      <div className="navlinks">
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="https://drive.google.com/file/d/1hXUNC39PfBKwWu6QdSngr82rz1YgkW8V/view?usp=sharing">
          Resume
        </NavLink>
      </div>
      {/* <Typography variant="h6">&lt;arnav.dev/&gt;</Typography> */}
      {/* <p>&lt;arnav.dev&gt;</p>
      <p>&lt;arnav.dev&gt;</p> */}
    </div>
  );
};

export default Navbar;
