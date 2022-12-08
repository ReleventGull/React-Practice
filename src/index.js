import React, { useState } from "react"; //Enables JSX
import ReactDOM from "react-dom/client"; //Allows us to Attach the App
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Albums, Header, Home, Signup, Login} from "./exports";


//compenet is a function that returns HTML template
const Main = () => {
  return (
    <>
    <main>
      <Header />
      
      <Route exact path = '/'>
      <Home/>
      </Route>

      <Route exact path ='/signup'>
      <Signup/>
      </Route>

      <Route exact path='/login'>
      <Login />
      </Route>
      
      <Route exact path="/albums">
      <Albums />
      </Route>
    </main>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Router>
    <Main />
  </Router>
);
