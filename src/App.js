import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';

function App() {
    const [mode, setMode] = useState('light');
    const [modeText, setModeText] = useState('Enable Dark Mode');
    const toggleMode = () => {
        if(mode === 'light') {
            setModeText('Disable Dark Mode');
            setMode('dark');
            document.body.style.backgroundColor = '#303538';
        }
        else {
            setModeText('Enable Dark Mode');
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }
    return (
        <>
            <Navbar title="TextUtils" homeText="Home" aboutText="About" modeText={modeText} mode={mode} toggleMode={toggleMode}/>
            <div className="container">
                <TextForm heading="Enter the text to analyze" mode={mode}/>
            </div>
            {/* <About /> */}
        </>
    );
}

export default App;
