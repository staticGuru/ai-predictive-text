import React from "react";
import InputPredict from "../../lib/Predict";
function AItextinput() {
  return (
    <div>
      <InputPredict
        type="text"
        name="name"
        placeholder="colorname"
        // fuzzy={true}
        onValueChange={(e) => console.log("text", e)}
        dictionary={[
          "kiwi",
          "oranges",
          "watermelon",
          "pineapple",
          "what is the datasciences?",
          "Okay, thank you for the data",
        ]}
      />
    </div>
  );
}

export default AItextinput;
