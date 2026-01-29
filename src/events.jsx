import React from "react";

function Events(){
    function handleClick(){
        alert("Button Clicked!");
    }
    function handlechange(event){
        console.log("Input Changed:", event.target.value);
    }

    
    return(
        <>
        <div>
            <button onClick={handleClick}>Cick Me</button>
        </div>
        <div>
            <input type="text" onChange={handlechange}/>
        </div>
        </>
    )
}

export default Events;