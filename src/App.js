import logo from "./logo.svg";
import React from "react";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1a237e",
//     },
//     secondary: {
//       main: "#ff1744",
//     },
//   },
// });

const theme = createTheme({
  // palette: {
  //   text: {
  //     primary: "#ffffff",
  //     secondary: "#ffffff",
  //     // disabled: styles.ttt,
  //     // hint: styles.tttt,
  //   },
  //   primary: {
  //     main: "#ffffff",
  //   },
  //   secondary: {
  //     main: "#ff1744",
  //   },
  // },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    allVariants: {
      color: "#ffffff",
    },
  },
  // components: {
  //   Link: {
  //     defaultProps: {
  //       underline: "none",
  //       color: "inherit",
  //     },
  //   },
  // },
});

const App = () => {
  // <Routes>
  //   <Route path="/" element={<Home />} />
  // </Routes>;
  return (
    <ThemeProvider theme={theme}>
      <Navbar></Navbar>
    </ThemeProvider>
  );
};

export default App;
