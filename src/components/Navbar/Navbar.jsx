import React from "react";
import { useState } from "react";
import "./Navbar.css";
import {
  AppBar,
  Container,
  Grid,
  Toolbar,
  Typography,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const pages = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    {
      name: "Resume",
      href:
        "https://drive.google.com/file/d/1hXUNC39PfBKwWu6QdSngr82rz1YgkW8V/view?usp=sharing",
    },
  ];

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
    <div>
      <Box className="navbar" sx={{ display: { xs: "none", md: "flex" } }}>
        <NavLink href="#">&lt;arnav.dev/&gt;</NavLink>
        <div className="navlinks">
          {pages.map(({ name, href }) => (
            <NavLink key={name} href={href}>
              {name}
            </NavLink>
          ))}
          {/* <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="https://drive.google.com/file/d/1hXUNC39PfBKwWu6QdSngr82rz1YgkW8V/view?usp=sharing">
            Resume
          </NavLink> */}
        </div>
        {/* <Typography variant="h6">&lt;arnav.dev/&gt;</Typography> */}
        {/* <p>&lt;arnav.dev&gt;</p>
      <p>&lt;arnav.dev&gt;</p> */}
      </Box>
      <Box className="navbar" sx={{ display: { xs: "flex", md: "none" } }}>
        <Box sx={{ width: "10%" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            // aria-controls="menu-appbar"
            // aria-haspopup="true"
            onClick={() => {
              setDrawerOpen(true);
            }}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => {
              setDrawerOpen(false);
            }}
          >
            <Box
              p={2}
              width="250px"
              textAlign="center"
              role="presentation"
              sx={{ backgroundColor: "black" }}
              height="100%"
            >
              <List>
                {pages.map(({ name, href }) => (
                  <ListItem key={name}>
                    <ListItemButton href={href}>
                      <ListItemText
                        primary={name}
                        onClick={() => {
                          setDrawerOpen(false);
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
        <NavLink href="#">&lt;arnav.dev/&gt;</NavLink>
        <Box sx={{ width: "10%" }}></Box>
      </Box>
    </div>
  );
};

export default Navbar;
