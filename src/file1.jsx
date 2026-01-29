import React from "react";
import './file1.css';
import Footer from "./footer.jsx";
import Header from "./header.jsx"; 
import Buttons from "./buttons.jsx";
import Cards from "./cards.jsx";    

function greet(){
    return (
    // <>
    // <div className="main">
    //     <h1 className="h11">Hai </h1>
    //     <h1 className="h12">I am Nishana</h1>
    // </div>
    // </>
    <>
    <Header/>
    
    <div>
        <h1><span style={{color:"red"}}>Hai</span><span> I am Nishana</span></h1>
        <Buttons label="Registration"/>
        <Buttons label="Login"/>
    </div>
    <div>
        <Cards title="Card Title 1" text="This is the text for card 1."/>
        <Cards title="Card Title 2" text="This is the description for card 2."/>             
        <Cards title="Card Title 3" text="This is the description for card 3."/>
        <Cards title="Card Title 4" text="This is the description for card 4."/>
    </div>
    <Footer/>
    </>
)
}


export default greet;
