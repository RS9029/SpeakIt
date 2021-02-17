import React from "react";


const createSection = document.getElementById("create-element-container");

function CreateElement(){

    function CreateElementCancel(){
        createSection.style.transform = "scaleY(0)";
    }

    function CreateAnElement(){

        
    }

    return(
        <div id = "create-element-container">
            <h1>Create:</h1>
            <input placeholder = "Word"></input>
            <input placeholder = "Image"></input>
            <button onClick={CreateElementCancel}>Cancel</button>
            <button onClick = {CreateAnElement}>Create</button>
        </div>
    )
}

export default CreateElement;