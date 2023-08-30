import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked:" + text)
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upercase", "Success")
  }
  const handleLowerClick = () => {
    // console.log("LowerCase was clicked:" + text)
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "Success")
  }
  const handleCapitalizedClick = () => {
    let capitalizedText = text
      .split(' ')
      .map(function (word, index) {
        // First character upper case else lower case
        return word.charAt(0)
          .toUpperCase() + word.slice(1)
            .toLowerCase();
      })
      .join(' ');
    setText(capitalizedText);
    props.showAlert("Capitalize text!", "Success")
  }
  
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value)
  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "Success")
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove extra spaces!", "Success")
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Cleared Text!", "Success")
  }

  const [text, setText] = useState('');

  // text = "new text" //wrong way
  // setText("new text") // correct way

  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'042743'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upercase</button>

        <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalizedClick}>Capitalized Case</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Taxt</button>

      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'042743'}}>
        <h2>Your Text Summay</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter somthing in the textbox above to the preview it here"}</p>

      </div>
    </>
  )
}