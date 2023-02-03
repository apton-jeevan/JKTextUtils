import React, { useState } from "react";

//to change the value of text as entered by the user
export default function TextForm(props) {
  const OnChangeHandler = (event) => {
    setText(event.target.value);
  };

  //to convert text to upper case
  const UppercaseHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success")
  };

  //to convert text to lower case
  const LowercaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success")
  };

  //to clear the text area
  const ClearTextHandler = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text area cleared", "success")
  };

  // The navigator.clipboard object is a web API that provides access to the clipboard. The writeText() method allows you to write a string of text to the clipboard, replacing any existing data that was previously stored there.

  //  It takes a single argument, which is the text that you want to write to the clipboard.


  // to copy 
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();//actually this is not needed but just for visual appearence we included it
    navigator.clipboard.writeText(text.value);// main line which actullay write the text to clipboard[this is equal to ctrl+c]
    props.showAlert("Text copied to clipboard", "success")
  }

  // to remove extra spaces
  //   [ ]: Matches a single space character.
  // +: Specifies that the preceding character (in this case, a space) should be matched one or more times.
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); //regex which splits text with delimiter 'one or more spaces'
    setText(newText.join(" "))//joins all items in array(words) with space
    props.showAlert("Extra spaces has been removed", "success")
  }

  let [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={OnChangeHandler} id="myBox" rows="8"
            style={{ backgroundColor: props.mode === 'dark' ? 'rgb(27, 26, 26)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
          ></textarea>
        </div>

        <button disabled={text.length===0}  className="btn btn-primary me-2 mb-2" onClick={UppercaseHandler}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 mb-2" onClick={LowercaseHandler}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 mb-2" onClick={ClearTextHandler}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary me-2 mb-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary me-2 mb-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    
      </div>


      <div className="container my-3">
        <h1> Your Text Summary</h1>
        {/* \s+ is a regular expression which targets one or more whitespaces(newline , spaces) */}
        <b> {text.split(/\s+/).filter((element)=>{ return element.length!==0}).length } words and {text.length} characters</b>
        <p>
       
          <b>You will take {text.split(" ").filter((element)=>{ return element.length!==0}).length *0.008 }minutes to read the
            above text</b>
          {/* For humans, On average to read a single word takes 0.008 minutes */}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the above textbox to preview it here"}</p>

      </div>

    </>
  );
}
