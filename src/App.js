import "./App.css";
import { useState } from "react";
import PswrdValid from "./PswrdValid";

function App() {
  const [conditon, setCondition] = useState("");
  const [check, setCheck] = useState({
    upperCase: false,
    lowerCase: false,
    digit: false,
    specail: false,
    minLength: false,
  });

  const handleonKeyUp = e => {
    const { value } = e.target;
    const upperCaseCheck = /[A-Z]/.test(value);
    const lowerCaseCheck = /[a-z]/.test(value);
    const digitCheck = /[0-9]/.test(value);
    const specailCheck = /[!@#%^&*]/.test(value);
    const minLengthCheck = value.length >= 8;
    setCheck({
      upperCaseCheck,
      lowerCaseCheck,
      digitCheck,
      specailCheck,
      minLengthCheck,
    });
  };

  const paswrd = document.getElementById("paswrd");
  const showpass = document.getElementById("show");

  const ShowPass = () => {
    if (paswrd.type === "password") {
      showpass.classList.add("hide");
      console.log(showpass.value);
      paswrd.setAttribute("type", "text");
    } else {
      showpass.classList.remove("hide");
      paswrd.setAttribute("type", "password");
    }
  };
  const changeEvent = e => {
    const value = e.target.value;
    setCondition(value);
  };

  return (
    <div className='App'>
      <header className='heading'>
        <h1>Password Authentication</h1>
      </header>
      <div className='input-div'>
        <input
          id='paswrd'
          type='password'
          placeholder='Enter your password'
          onChange={changeEvent}
          value={conditon}
          onKeyUp={handleonKeyUp}
        />
        <span className='show' onClick={ShowPass} id='show'></span>
      </div>
      <PswrdValid
        upperCase={check.upperCaseCheck ? "valid" : "invalid"}
        lowerCase={check.lowerCaseCheck ? "valid" : "invalid"}
        digit={check.digitCheck ? "valid" : "invalid"}
        specail={check.specailCheck ? "valid" : "invalid"}
        minLength={check.minLengthCheck ? "valid" : "invalid  "}
      />
    </div>
  );
}

export default App;
