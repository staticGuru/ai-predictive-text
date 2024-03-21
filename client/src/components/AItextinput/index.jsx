import React from "react";
import InputPredict from "../../lib/Predict";
function AItextinput() {
  return (
    <div>
      <InputPredict
        type="text"
        name="name"
        placeholder="Search.."
        onValueChange={(e) => console.log("text", e)}
        dictionary={[
          "what is the datasciences",
          "what is the datasciences ai?",
          "Okay, thank you for the data",
        ]}
      />    
    </div>
  );
}

export default AItextinput;
