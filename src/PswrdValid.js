import React from "react";
import "./App.css";

function PswrdValid({ upperCase, lowerCase, digit, specail, minLength }) {
  return (
    <div>
      <div className='auth'>
        <ul className='list'>
          <li id='capital' className={upperCase}>
            it contains must be one captial alphabet
          </li>
          <li id='lower' className={lowerCase}>
            it contain must be one lower alphabet
          </li>
          <li id='specail' className={specail}>
            it contains must be one special character
          </li>
          <li id='number' className={digit}>
            it contains must be one number
          </li>
          <li id='length' className={minLength}>
            it contain must be 8 character
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PswrdValid;
