
//imports

import React from 'react';
import SpeechButton from './components/speech-button';
import './scss/style.scss';
import Navbar from './components/Navbar';
import BotNav from './components/BotNav';



//App

function App(){
    return(
        <div id = "app">
            <Navbar/>
            <div id = "speech-grid">
                <SpeechButton msg = "Hello" />
                <SpeechButton msg = "I" />
                <SpeechButton msg = "Want"/>
            </div>
            <BotNav/>
        </div>
    );
}

export default App;