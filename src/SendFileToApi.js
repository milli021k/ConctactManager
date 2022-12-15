import React, { useState } from "react";
import axios from "axios";

export default function SendFileToApi() {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSave = () => {
    const textToSave = inputText;

    // Make HTTP request to API endpoint
    axios
      .post("http://example.com/api/save-text", textToSave)
      .then((response) => {
        // Handle success response from API
        console.log("Text saved successfully");
      })
      .catch((error) => {
        // Handle error response from API
        console.error("Error saving text:", error);
      });

    setInputText("");
  };

  return (
    <div>
      <textarea onChange={handleChange} value={inputText} />
      <button onClick={handleSave}>Save to Text File</button>
    </div>
  );
}
