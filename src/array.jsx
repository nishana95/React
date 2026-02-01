import React from "react";

function array(){
    const products=[
        {id:1,name:'Laptop',price:50000},
        {id:2,name:'Mobile',price:20000},
        {id:3,name:'Tablet',price:15000}
    ];
    return(
        <>
        <div>
            <ul>
                {products.map(product=>(
                    <li key={product.id}>{product.name} - ₹{product.price}</li>
                ))}
            </ul>
        </div>
        </>

    )
}


export default array;