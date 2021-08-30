import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";

function App() {
    const [mode, setMode] = useState('light');
    const [modeText, setModeText] = useState('Enable Dark Mode');
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    const toggleMode = () => {
        if(mode === 'light') {
            setModeText('Disable Dark Mode');
            setMode('dark');
            document.body.style.backgroundColor = '#303538';
            showAlert("Dark mode has been enabled!", "success");
        }
        else {
            setModeText('Enable Dark Mode');
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Dark mode has been disabled!", "success");
        }
    }
    const changeColor = (color) => {
        document.body.style.backgroundColor = color;
        showAlert("Background Color has been changed!", "info");
    }
    return (
        <>
            <Navbar title="TextUtils" homeText="Home" aboutText="About" modeText={modeText} mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
            <Alert alert={alert}/>
            <div className="container">
                <TextForm heading="Enter the text to analyze" mode={mode} alert={showAlert}/>
            </div>
            {/* <About /> */}
        </>
    );
}

export default App;
