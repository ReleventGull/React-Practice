import React, { useEffect, useState } from "react"; //Enables JSX
import ReactDOM from "react-dom/client"; //Allows us to Attach the App
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Albums, Header, Home, Signup, Login, Shop} from "./exports";
import {getUserData} from './apiCall'
 
//compenet is a function that returns HTML template
const Main = () => {
  const [userData, setUserData] = useState([])
  const [token, setToken] = useState(window.localStorage.getItem('token') || '')
  //const [token, setToken] = useState('')
  console.log('Token here in the state', token)
  
  useEffect(() => {
    if(!token) {
      return null
    }
    async function getUser() {
      const user = await getUserData(token)
      console.log(user)
    }
    getUser()
  }, [])
  
  
  
  
  return (
    <>
    <main>
      <Header token={token}/>
      
      <Route exact path = '/'>
      <Home/>
      </Route>

      <Route exact path="/albums">
      <Albums />
      </Route>

      <Route exact path='/shop'>
        <Shop />
      </Route>
     
      <>
      <Route exact path ='/signup'>
      <Signup setToken={setToken}/>
      </Route>

      <Route exact path='/login'>
      <Login setToken={setToken}/>
      </Route>
      </>
      
      
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
