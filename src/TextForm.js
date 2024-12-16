import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleUpClicks=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange= (event)=>{

       setText(event.target.value);
    }

    //use state is a hook
    //  hook means we use class features with out making class 

    const [text,setText]=useState('enter your text');


    return (

        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
            </div>
            <button  className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
            <button  className="btn btn-dark" onClick={handleUpClicks}>convert to lowercase</button>
           

            
        

        </div>
        

    )
}
