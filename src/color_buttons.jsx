import react from "react";

function color_buttons() {
    function ShowAlert(color) {
        const alertBox = document.getElementById("displaytext");
        alertBox.innerText = `You clicked the ${color} button`;
        alertBox.style.color = color;
        
    }
    return (
        <>
            <div>
                <h1 id="displaytext"></h1>
            </div>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <button style={{ backgroundColor: "red", width: "100px", height: "40px" }} onClick={() => ShowAlert("red")}>RED</button>
                <button style={{ backgroundColor: "blue", width: "100px", height: "40px" }} onClick={() => ShowAlert("blue")}>BLUE</button>
                <button style={{ backgroundColor: "green", width: "100px", height: "40px" }} onClick={() => ShowAlert("green")}>GREEN</button>
                <button style={{ backgroundColor: "brown", width: "100px", height: "40px" }} onClick={() => ShowAlert("brown")}>BROWN</button>
            </div>
            

        </>
    )
}

export default color_buttons;