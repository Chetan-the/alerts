
import './App.css';
import Navbar from './Navbar';
import About from './About';
import TextForm from './TextForm';
import React,{useState} from 'react';

function App() {
  const [mode,setMode]=useState('dark');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';

    }
  }
  return (
    <>
      <Navbar title="TextUtils!" about="about textutils" mode={mode}  toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="enter text below"  mode={mode}/>
      <About/>
      </div>
    </>

  );
}

export default App;
