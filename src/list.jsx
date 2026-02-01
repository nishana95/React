import React from "react";

function lists(){
    const items=['Apple','Banana','Orange','Mango'];
    return(
        <>
        <div>
            <ul>
                {items.map(item=>
                <li key={item}>{item}</li>
                )}
            </ul>
        </div>
        </>
    )
}

export default lists;