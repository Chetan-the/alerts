
import './App.css';
import Navbar from './Navbar';
import About from './About';
function App() {
  return (
    <>
      <Navbar title="TextUtils!" about="about textutils" />
      <div className="container">
      <About/>
      </div>
    </>

  );
}

export default App;
