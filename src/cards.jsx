import react from "react";

function cards(props) {
    return (
        <div className="card" style={{width: "18rem",height:"10rem",  display:"inline-block", margin:"10px",border:"1px solid black",padding:"10px" }}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>

    )
}


export default cards;
