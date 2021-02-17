import React from 'react';

const msg = new SpeechSynthesisUtterance();

function SpeechButton(props){

    function talkIt(){
        msg.text = props.msg;
        speechSynthesis.speak(msg);
    }

    return(
        <div className = "speech-button" onClick = {talkIt}>
            <h1 id = "talk-text">{props.msg}</h1>
        </div>
    )
}

export default SpeechButton;