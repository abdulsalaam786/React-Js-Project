import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');    // whether dark mode is enable or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "Success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "Success")
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar tittle="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about"><About /></Route>
            <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Try Textutils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />
            {/* </Route> */}
          {/* </Routes>  */}
        </div>
      {/* </Router> */}
      <About mode={mode}/>
    </>
  )
}

export default App;
