import React from "react";

import Product from "./product.jsx";

function productlist(){
    const products=[
        {id:1,name:'Laptop',price:50000},
        {id:2,name:'Mobile',price:20000},
        {id:3,name:'Tablet',price:15000}
    ]
    return(
        <div>
            {products.map(product=>(
                <Product key={product.id} name={product.name} price={product.price}/>
            ))}
        </div>    
    )
}

export default productlist;