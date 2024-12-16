import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleUpClicks = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange = (event) => {

        setText(event.target.value);
    }

    //use state is a hook
    //  hook means we use class features with out making class 

    const [text, setText] = useState('enter your text');


    return (
        <>


            <div className="conatiner">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-dark" onClick={handleUpClicks}>convert to lowercase</button>
            </div>
            <div className="conatiner my-3">
                <h1>your text summary</h1>
                <p>you have {text.split(" ").length} words and having {text.length}characters in your text</p>
                <p>{0.008 * text.split(" ").length} time taken to read the text</p>
                <h2>preview of the text</h2>
                <p>{text}</p>
                
            </div>

        </>
    )
}
