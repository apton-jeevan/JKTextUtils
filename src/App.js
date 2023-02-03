import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  const [mode, setMode] = useState("light")//for dark and light mode

  const [alert, setalert] = useState(null) // for showing alerts when a textutil button is pressed 

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 1000)
  }
  const togglemodeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(14 36 59)";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled successfully", "success")
      // document.title = "JK TextUtils(Dark Mode)";
    }
    else {

      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled successfully", "success")
      // document.title = "JK TextUtils(Light Mode)";

    }
  }
  return (
    <>
      <Router>
      <Navbar title="Textutils" home="Home" about="About TextUtils" togglemode={togglemodeHandler} mode={mode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>

            <Route path="/about" element={<About mode={mode}/>}/>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
            
            
          </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
