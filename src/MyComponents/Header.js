import React from "react";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    return setResult(result.concat(e.target.name));
  };
  const clear = () => {
    return setResult("");
  };
  const calculate = () => {
    // eslint-disable-next-line no-eval
    return setResult(eval(result).toString());
  };
  return (
    <div className="container">
      <div id="calcu">
        <h1>Calculator</h1>
        <div id="calc1">
          <input type="text" placeholder="0" id="result" value={result} />
        </div>
        <div id="calc2">
          <input
            type="button"
            name="1"
            id="b1"
            onClick={handleClick}
            value="1"
          />

          <input
            type="button"
            name="2"
            id="b1"
            onClick={handleClick}
            value="2"
          />

          <input
            type="button"
            name="3"
            id="b1"
            onClick={handleClick}
            value="3"
          />

          <input
            type="button"
            name="4"
            id="b1"
            onClick={handleClick}
            value="4"
          />

          <input
            type="button"
            name="5"
            id="b1"
            onClick={handleClick}
            value="5"
          />

          <input
            type="button"
            name="6"
            id="b1"
            onClick={handleClick}
            value="6"
          />

          <input
            type="button"
            name="7"
            id="b1"
            onClick={handleClick}
            value="7"
          />

          <input
            type="button"
            name="8"
            id="b1"
            onClick={handleClick}
            value="8"
          />

          <input
            type="button"
            name="9"
            id="b1"
            onClick={handleClick}
            value="9"
          />

          <input
            type="button"
            name="0"
            id="b1"
            onClick={handleClick}
            value="0"
          />

          <input
            type="button"
            name="+"
            id="b2"
            onClick={handleClick}
            value="+"
          />

          <input
            type="button"
            name="-"
            id="b2"
            onClick={handleClick}
            value="-"
          />

          <input
            type="button"
            name="*"
            id="b2"
            onClick={handleClick}
            value="*"
          />

          <input
            type="button"
            name="/"
            id="b2"
            onClick={handleClick}
            value="/"
          />

          <input
            type="button"
            name="."
            id="b2"
            onClick={handleClick}
            value="."
          />

          <input type="button" name="=" id="b2" onClick={calculate} value="=" />

          <input type="button" name="" id="b2" onClick={clear} value="clear" />
        </div>
      </div>
    </div>
  );
}
