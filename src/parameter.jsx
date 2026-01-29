import React from "react";
import buttons from "./buttons";

function parameter(){
    function greet(name){
        alert(`Heloo,${name}`)
    }
    function handleClick(id){
        alert(`Button ${id} clicked`);
    }
    return (
        <>
        <div>
            <button onClick={()=>greet("Nishana")}>Greet</button>
        </div>
        <div>
            <button onClick={()=>handleClick(1)}>Button1</button>
            <button onClick={()=>handleClick(2)}>Button2</button>
        </div>
        </>
    )
}

export default parameter;