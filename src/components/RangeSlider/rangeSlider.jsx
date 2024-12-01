import { useState } from "react";

export const RangeSlider = () => {
  const [value, setValue] = useState(8);
  const [randomPass, setRandomPass] = useState("");
  const [number, setNumber] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [upperCase, setupperCase] = useState(false);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function generatePassword() {
    let charSet = "abcdefghijklmnopqrstuvwxyz";
    if (number) {
      charSet += "1234567890";
    }
    if (specialChar) {
      charSet += "!@#$%^&*()_+~`{}|[];''<>?,./";
    }
    if (upperCase) {
      charSet += charSet.toUpperCase();
    }
    let newPassword = "";
    for (let i = 0; i <= value; i++) {
      newPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    setRandomPass(newPassword);
  }

  function handleCopy() {
    navigator.clipboard.writeText(randomPass);
  }
  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={handleChange}
        />
        <p>{value}</p>
        <button onClick={generatePassword}>Generate</button>
        <p>Random Password: {randomPass}</p>
        <label>
          <p>Number:</p>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </label>
        <label>
          <p>Special Character:</p>
          <input
            type="checkbox"
            checked={specialChar}
            onChange={() => setSpecialChar(!specialChar)}
          />
        </label>
        <label>
          <p>Uppercase:</p>
          <input
            type="checkbox"
            checked={upperCase}
            onChange={() => setupperCase(!upperCase)}
          />
        </label>
        <br />
        <button onClick={handleCopy}>Copy</button>
      </div>
    </>
  );
};
