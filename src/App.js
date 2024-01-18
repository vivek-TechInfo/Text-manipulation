import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#022441";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode Enabled", "primary");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
          exact
            path="/"
            element={
              <Textform
                heading={" Text manipulation System"}
                mode={mode}
                showAlert={showAlert}
              />
            }
          />

          {/* <Textform heading={"Enter The Text To Analyis"} mode={mode} showAlert={showAlert} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
