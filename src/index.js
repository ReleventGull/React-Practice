import React, {useState} from 'react'; //Enables JSX
import ReactDOM from 'react-dom/client' //Allows us to Attach the App
const root = ReactDOM.createRoot(document.getElementById('app'))

const headerObj = {
 textLinks: ["Home", "About", "Gear"]
}

const Header = ({props}) => {
    return (
    <header>
        <h1>CHON ALBUMS</h1>
        <img className="chonLogo" src="https://d1h6olfj08dopz.cloudfront.net/images/41392/Chon_Logo_NavBar_Grow.png" alt=""/>
        <nav className="wholenav">
            {<a href="">{props}</a>}
            
        </nav>
        
    </header>
    )
}




//compenet is a function that returns HTML template
const Main = () => {
    return (
        <main>
            <Header props={headerObj.textLinks}/>
        </main>
         )
}


root.render(<Main />);