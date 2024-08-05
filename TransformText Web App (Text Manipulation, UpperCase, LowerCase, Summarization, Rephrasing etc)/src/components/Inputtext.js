import React, { useState } from "react";
import "../App.css";

const SummarizeApiKey = process.env.REACT_APP_SUMMARIZE_API_KEY;
const RephraseAPIKey = process.env.REACT_APP_REPHRASE_API_KEY;

function InputText() {
  const [text, setText] = useState("");
  const textToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const textToLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const textCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const textClear = () => {
    setText("");
  };
  const textToCaptilize = () => {
    if (text !== "") {
      let newText = text
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
      setText(newText);
    }
  };
  const rephraseText = async () => {
    const url =
      "https://paraphrasing-and-rewriter-api.p.rapidapi.com/rewrite-hard";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": { RephraseAPIKey },
        "x-rapidapi-host": "paraphrasing-and-rewriter-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: {
        from: "en",
        text: { text },
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setText(result);
    } catch (error) {
      console.error(error);
    }
  };
  const summarizeText = async () => {
    const options = { method: "GET" };
    try {
      setText("Loading...");
      const response = await fetch(
        `https://text-summarizer.unicornapi.co/v1?api_key=${SummarizeApiKey}&text=${text}`,
        options
      );
      const result = await response.json();
      const firstKey = Object.keys(result)[1];
      setText(result[firstKey]);
    } catch (error) {
      console.log(error);
    }
  };
  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
  };

  const textChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="inputText container mb-4 mt-4 pt-4">
        <form>
          <textarea
            type="text"
            value={text}
            onChange={textChange}
            placeholder="Enter your text"
            rows={8}
            className="w-100"
          ></textarea>
        </form>
      </div>
      <div className="container mx-auto mb-4">
        <button className="m-1 btn btn-primary" onClick={textToLoCase}>
          Change Into LowerCase
        </button>
        <button className="m-1 btn btn-primary" onClick={textToCaptilize}>
          Change Into Captilize
        </button>
        <button className="m-1 btn btn-primary" onClick={textToUpperCase}>
          Change Into UpperCase
        </button>
        <button className="m-1 btn btn-primary" onClick={rephraseText}>
          Rephrase Text
        </button>
        <button className="m-1 btn btn-primary" onClick={summarizeText}>
          Summarize Text
        </button>
        <button className="m-1 btn btn-primary" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="m-1 btn btn-primary" onClick={textCopy}>
          Copy to Clipboard
        </button>
        <button className="m-1 btn btn-warning" onClick={textClear}>
          Set Clear
        </button>
      </div>
      <div className="container mx-auto">
        <h3>Text Summary</h3>
        <p>
          {text.split(/\w+/g).length - 1} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default InputText;
