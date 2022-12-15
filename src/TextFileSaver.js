import React, { useState } from "react";

import { saveAs } from "file-saver";

export default function TextFileSaver() {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSave = () => {
    const textToSave = inputText;
    const file = new File([textToSave], "my-file.txt", {
      type: "text/plain;charset=utf-8",
    });
    saveAs(file);
  };

  return (
    <div>
      <textarea onChange={handleChange} value={inputText} />
      <button onClick={handleSave}>Save to Text File</button>
    </div>
  );
}
