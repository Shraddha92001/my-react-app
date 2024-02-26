
import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUPClick = ()=>{
        console.log("UpperCase was clicked" +text);
        let newtext = text.toUpperCase();
        setText (newtext)
    }

    const handleOnChange = (event)=>{
        console.log("on chnage");
        setText(event.target.value  )
    }

    const handleLCclick = ()=>{
        console.log("LowerCse was clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const cleartext = ()=>{
        let newtext = '';
        setText(newtext);
    }

    const Copytext = ()=>{
        let newtext = document.getElementById("mybox");
        newtext.select();
        navigator.clipboard.writeText(newtext.value);
    }

    // const handleDownload = ()=>{
    //     console.log("hello");
    //     // window.location.href = '/path/to/your/file';
    // }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{color: props.Mode === 'dark'? 'white' : 'black'}}>
            <h2>{props.heading} </h2>
            <div className="mb-3 ">
                <textarea className='form-control' onChange={handleOnChange}  style={{backgroundColor: props.Mode === 'dark'? 'grey' : 'white' , color:props.Mode === 'dark'? 'white' : 'black'}}  value ={text} id="mybox" rows="8"></textarea>
            </div>

            <button type="button" class="btn btn-success mx-1" onClick={handleUPClick }> Convert to UPPER CASE</button> 
            <button className='btn btn-primary  mx-1' onClick={handleLCclick} > Convert to lower case</button>
            <button type="button" className='btn btn-danger mx-1' onClick={cleartext} >Clear</button>
            {/* <button type=" button" className='btn btn-info mx-1' onClick={handleDownload}>Download File</button> */}
            <button type="button" className='btn btn-secondary mx-1' onClick={Copytext} >Copy Text</button>
        </div>
        <div className="container my-3"  style={{color: props.Mode === 'dark'? 'white' : 'black'}}>
            <h1>Your Summery</h1>
            <p>{text.split(" ").length} Words and {text.length}  characters </p>
            <p>{0.08 * text.split(" ").length} Minute Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
        
    )
}
