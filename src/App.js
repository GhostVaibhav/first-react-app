import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
    return (
        <>
            <Navbar title="TextUtils" homeText="Home" aboutText="About" />
            <div className="container">
                <TextForm heading="Enter the text to analyze" />
            </div>
            {/* <About /> */}
        </>
    );
}

export default App;
