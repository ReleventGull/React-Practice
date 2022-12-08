import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React  from "react"; //Enables JSX
const Header = () => {
    return (
      <header>
        <img className='chonSelfTitledLogo' src='https://pbs.twimg.com/profile_images/1186705742339788800/xD0wpGRk_400x400.jpg' />
        <img
          className="chonLogo"
          src="https://d1h6olfj08dopz.cloudfront.net/images/41392/Chon_Logo_NavBar_Grow.png"
          alt=""
        />
        <nav className="wholenav">
          <Link to="/">Home</Link>
          <Link to="/Albums">Ablums</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Signup">Sign Up</Link>
          <Link to='/Shop'>Shop</Link>
          
        </nav>
      </header>
    );
  };

  export default Header