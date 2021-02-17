import React from "react";
import CreateElement from "./CreateElement";

function BotNav(){

    function createElementAppear(){
       const createSection = document.getElementById("create-element-container");
       createSection.style.transform = "scaleY(1)";  
    }

    return(
        <div id = "bot-nav">
             <CreateElement/>
            <button id = "create-btn" onClick = {createElementAppear}>Create Button</button>
            <button id = "delete-btn">Delete Button</button>
        </div>
    )
}

export default BotNav;