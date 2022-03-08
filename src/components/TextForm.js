import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    }
    const handleclearClick = (event)=>{
        // console.log("On change");
        setText("")
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div className="container"> 
        
            <h2 className='justify-content-center text-center'><b>{props.heading}</b></h2>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Start typing...'></textarea>
            </div>
            <div className="className text-center">
            <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-dark mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-dark mx-1" onClick={handleclearClick}>Clear</button>
            </div>
        </div>
        <div className="container my-3 justify-content-center text-center">
            
            <h5>Words: {text.split(" ").length}  Characters: {text.length}</h5>
        </div>
        </>
    )
}