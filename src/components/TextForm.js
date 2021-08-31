import React, { useState } from "react";

export default function TextForm(props) {
    const upperText = () => {
        setText(text.toUpperCase());
        if (text.length > 0) props.alert("Converted to Uppercase!", "success");
    };
    const lowerText = () => {
        setText(text.toLowerCase());
        if (text.length > 0) props.alert("Converted to Lowercase!", "success");
    };
    const changeText = (event) => {
        setText(event.target.value);
    };
    const clearText = () => {
        setText("");
        if (text.length > 0) props.alert("Cleared text", "success");
    };
    const capitalText = () => {
        let newText = text.split(" ");
        for (let i = 0; i < newText.length; i++) {
            newText[i] =
                newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(" "));
        if (text.length > 0)
            props.alert("Converted to Capital Case!", "success");
    };
    const copyText = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        if (text.length > 0) props.alert("Copied text!", "success");
    };
    const removeExtraSpaces = () => {
        setText(text.replace(/\s\s+/g, " "));
        if (text.length > 0) props.alert("Removed extra spaces!", "success");
    };
    const [text, setText] = useState("");
    return (
        <>
            <div
                className={`container text-${
                    props.mode === "light" ? "dark" : "light"
                }`}
            >
                <h1 className="my-3">{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea
                        className={`form-control bg-${props.mode} text-${
                            props.mode === "light" ? "dark" : "light"
                        }`}
                        value={text}
                        onChange={changeText}
                        id="my-box"
                        rows="8"
                    ></textarea>
                </div>
                <button
                    disabled={text.length === 0}
                    className={`btn btn-outline-${
                        props.mode === "light" ? "dark" : "light"
                    } mx-1 my-1`}
                    onClick={upperText}
                >
                    Convert To Uppercase
                </button>
                <button
                    disabled={text.length === 0}
                    className={`btn btn-outline-${
                        props.mode === "light" ? "dark" : "light"
                    } mx-1 my-1`}
                    onClick={lowerText}
                >
                    Convert To Lowercase
                </button>
                <button
                    disabled={text.length === 0}
                    className={`btn btn-outline-${
                        props.mode === "light" ? "dark" : "light"
                    } mx-1 my-1`}
                    onClick={capitalText}
                >
                    Convert To Capital Case
                </button>
                <button
                    disabled={text.length === 0}
                    className={`btn btn-outline-${
                        props.mode === "light" ? "dark" : "light"
                    } mx-1 my-1`}
                    onClick={copyText}
                >
                    Copy Text
                </button>
                <button
                    disabled={text.length === 0}
                    className={`btn btn-outline-${
                        props.mode === "light" ? "dark" : "light"
                    } mx-1 my-1`}
                    onClick={removeExtraSpaces}
                >
                    Remove Extra Spaces
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-danger mx-1 my-1"
                    onClick={clearText}
                >
                    Clear Text
                </button>
            </div>
            <div
                className={`container text-${
                    props.mode === "light" ? "dark" : "light"
                }`}
            >
                <h2 className="my-3">Text analysis</h2>
                <p>
                    {text.length
                        ? text.split(" ").filter((element) => {
                              return element.length;
                          }).length
                        : 0}{" "}
                    words and {text.length} characters written
                </p>
                <p>
                    Time taken to read the sentence (in seconds) :{" "}
                    {Math.round(
                        (text.length
                            ? text.split(" ").filter((element) => {
                                  return element.length;
                              }).length
                            : 0) *
                            0.008 *
                            60
                    )}
                </p>
                <h2 className="my-3">Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
