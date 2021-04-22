import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";

import "@fontsource/montserrat/700.css";
import "@fontsource/hind/700.css";

import "./index.css";

import reportWebVitals from "./reportWebVitals";

// Main Pages
import Home from "./pages/home";
import AboutPage from "./pages/about";
import FAQPage from "./pages/faq";
import LogIn from "./pages/login";
import SignUpPage from "./pages/signup";

// Feedback Pages
import NewClientPage from "./pages/newclients";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/faq">
        <FAQPage />
      </Route>
      <Route exact path="/log-in">
        <LogIn />
      </Route>
      <Route exact path="/sign-up">
        <SignUpPage />
      </Route>
      <Route path="/feedback/new-client">
        <NewClientPage />
      </Route>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
