
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
function App() {
  return (
    <>
      <Navbar title="TextUtils!" about="about textutils" />
      <div className="container">
        <TextForm heading="enter the text below" />
      </div>
    </>

  );
}

export default App;
