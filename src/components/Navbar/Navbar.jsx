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
      href: "https://drive.google.com/file/d/1HAjNG0ZrXUpNPfKOJA4RqHzmSlZtlu5B/view?usp=sharing",
    },
  ];

  return (
    <div>
      <Box className="navbar" sx={{ display: { xs: "none", md: "flex" } }}>
        <NavLink href="#">&lt;arnav.dev/&gt;</NavLink>
        <div className="navlinks">
          {pages.map(({ name, href }) => (
            <NavLink key={name} href={href}>
              {name}
            </NavLink>
          ))}
        </div>
      </Box>
      <Box className="navbar" sx={{ display: { xs: "flex", md: "none" } }}>
        <Box sx={{ width: "10%" }}>
          <IconButton
            size="large"
            aria-label="account of current user"
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
