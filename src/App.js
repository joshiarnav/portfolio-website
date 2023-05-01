import logo from "./logo.svg";
import React from "react";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import PageBox from "./components/PageBox/PageBox";
import WelcomePage from "./pages/Welcome/WelcomePage";
import AboutPage from "./pages/About/AboutPage";
import ExperiencePage from "./pages/Experience/ExperiencePage";
import ProjectsPage from "./pages/Projects/ProjectsPage";

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

let theme = createTheme({
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

theme = responsiveFontSizes(theme);

const App = () => {
  // <Routes>
  //   <Route path="/" element={<Home />} />
  // </Routes>;
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <WelcomePage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
    </ThemeProvider>
  );
};

export default App;
