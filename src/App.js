import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Navbar title="TextUtils" About="about Us" />

      <div className="container" my-3>
        <TextForm heading = "Enter the Taxt to analyze below" />
      </div>
      {/* <About/> */}
    </>
  );
}

export default App;
