import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light");
    const [toggleState, setToggleState] = useState(false);
    const [modeText, setModeText] = useState("Enable Dark Mode");
    const [alert, setAlert] = useState(null);
    const [link, setLink] = useState('Home');
    window.onload = () => {
        if(localStorage.getItem("theme"))
            if(localStorage.getItem("theme") === "dark")
                toggleMode();
        else
            localStorage.setItem("theme", "light");
        if(localStorage.getItem("highlightedLink"))
            if(localStorage.getItem("highlightedLink") === "About")
                setLink("About");
        else
            localStorage.setItem("highlightedLink", "Home");
    }
    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };
    const toggleMode = () => {
        if (mode === "light") {
            setModeText("Disable Dark Mode");
            setToggleState(true);
            setMode("dark");
            document.body.style.backgroundColor = "#303538";
            if(localStorage.getItem("theme") !== "dark") showAlert("Dark mode has been enabled!", "success");
            localStorage.setItem("theme", "dark");
        } else {
            setModeText("Enable Dark Mode");
            setToggleState(false);
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Dark mode has been disabled!", "success");
            localStorage.setItem("theme", "light");
        }
    };
    const changeColor = (color) => {
        document.body.style.backgroundColor = color;
        showAlert("Background Color has been changed!", "info");
    };
    const changeLink = (link) => {
        setLink(link);
        localStorage.setItem("highlightedLink", link);
    }
    return (
        <>
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar
                title="TextUtils"
                homeText="Home"
                aboutText="About"
                modeText={modeText}
                mode={mode}
                toggleMode={toggleMode}
                changeColor={changeColor}
                link={link}
                changeLink={changeLink}
                toggleState={toggleState}
            />
            <Alert alert={alert} />
            <div className="container">
                <Switch>
                    <Route exact path="/about">
                        <About mode={mode}/>
                    </Route>
                    <Route exact path="/">
                        <TextForm
                            heading="Enter the text to analyze"
                            mode={mode}
                            alert={showAlert}
                        />
                    </Route>
                </Switch>
            </div>
        </Router>
        </>
    );
}

export default App;
