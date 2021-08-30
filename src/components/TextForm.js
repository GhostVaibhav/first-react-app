import React, {useState} from 'react'

export default function TextForm(props) {
    const upperText = () => {
        setText(text.toUpperCase());
    }
    const lowerText = () => {
        setText(text.toLowerCase());
    }
    const changeText = (event) => {
        setText(event.target.value);
    };
    const clearText = () => {
        setText('');
    };
    const capitalText = () => {
        let newText = text.split(' ');
        for (let i = 0; i < newText.length; i++) {
            newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(' '));
    };
    const copyText = () => {
        navigator.clipboard.writeText(text);
    };
    const removeExtraSpaces = () => {
        setText(text.replace(/\s\s+/g, ' '));
    };
    const [text, setText] = useState('');
    return (
        <>
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1 className="my-3">{props.heading}</h1>
            <div className="mb-3 my-3">
              <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value={text} onChange={changeText} id="my-box" rows="8"></textarea>
            </div>
            <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-2`} onClick={upperText}>Convert To Uppercase</button>
            <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-2`} onClick={lowerText}>Convert To Lowercase</button>
            <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-2`} onClick={capitalText}>Convert To Capital Case</button>
            <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-2`} onClick={copyText}>Copy Text</button>
            <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} mx-1 my-2`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-outline-danger mx-1 my-2" onClick={clearText}>Clear Text</button>
        </div>
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h2 className="my-3">Text analysis</h2>
            <p>{text.length ? text.split(' ').length : 0} words and {text.length} characters written</p>
            <p>Time taken to read the sentence (in seconds) : {Math.round((text.length ? text.split(' ').length : 0) * 0.008 * 60)}</p>
            <h2 className="my-3">Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
