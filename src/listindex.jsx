import React from "react";

function listindex(){
    const items=['Red','Orange','White','Black'];
    return(
        <>
        <div>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </div>
        </>
    )
}


export default listindex;