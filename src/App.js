
import './App.css';
import Navbar from './Navbar';
import Alert from './Alert';
import About from './About';
import TextForm from './TextForm';
import React,{useState} from 'react';

function App() {
  const [mode,setMode]=useState('dark');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1000);

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('dark  mode enabled','success')

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('light  mode enabled','success')

    }
  }
  return (
    <>
      <Navbar title="TextUtils!" about="about textutils" mode={mode}  toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container">
        <TextForm  showAlert={showAlert} heading="enter text below"  mode={mode} />
      <About/>
      </div>
    </>

  );
}

export default App;
