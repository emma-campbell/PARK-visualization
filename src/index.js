import React, {useState} from "react";
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
import StartStudyPage from "./pages/studyStart";
import TaskTutorialPage from "./pages/Task_Tutorial";
import TaskRecordPage from "./pages/Task_Record";

// Feedback Pages
import NewClientPage from "./pages/newclients";
import ReturningClientsPage from "./pages/returningclients";
import CliniciansPage from "./pages/clinicians";

import AppContext from "./components/AppContext";


const App = () => {
  const [isPatient, setIsPatient] = useState(true);
  const [isNew, setIsNew] = useState(false);
  const [videoNumber, setVideoNumber] = useState(1);
  const value = { isPatient, setIsPatient, videoNumber, setVideoNumber, isNew, setIsNew};

  return (
    <AppContext.Provider value={value}>
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
      <Route path="/feedback/returning-client">
        <ReturningClientsPage />
      </Route>
      <Route path="/clinicians">
        <CliniciansPage />
      </Route>
      <Route path="/startStudy">
        <StartStudyPage />
      </Route>
      <Route path="/task">
        <TaskTutorialPage />
      </Route>
      <Route path="/record">
        <TaskRecordPage />
      </Route>
    </BrowserRouter>
    </AppContext.Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);



/*
ReactDOM.render(
  <React.StrictMode>
    <AppContext.Provider value={value}>
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
      <Route path="/feedback/returning-client">
        <ReturningClientsPage />
      </Route>
      <Route path="/clinicians">
        <CliniciansPage />
      </Route>
      <Route path="/startStudy">
        <StartStudyPage />
      </Route>
    </BrowserRouter>
    </AppContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
