import React, { useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [Mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if (Mode === 'light') {
      setMode ( 'dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode  ('light');
      document.body.style.backgroundColor = 'white';
    }  
  }

  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar title="TextUtils" About="about Us" mode={Mode} toggleMode={toggleMode} />

      <div className="container" my-3>
        <TextForm heading="Enter the Taxt to analyze below" mode={Mode}/>
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
