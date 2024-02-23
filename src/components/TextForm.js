
import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUPClick = ()=>{
        console.log("UpperCase was clicked" +text);
        let newtext = text.toUpperCase();
        setTest (newtext)
    }

    const handleOnChange = (event)=>{
        console.log("on chnage");
        setTest(event.target.value  )
    }

    const [text, setTest] = useState('Enter Text Here');
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3 ">
                <textarea className='form-control' onChange={handleOnChange} value ={text} id="mybox" rows="8"></textarea>
            </div>

            <button className='btn btn-primary' onClick={handleUPClick}> Convert to UpperCase</button>
            <button className='btn btn-primary' > Convert to LowerCase</button>
        </div>
    )
}
