import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card.js";

ReactDOM.render(
  <React.StrictMode>
    <Card
      imgsrc1="https://s1.1zoom.me/b5050/806/Moscow_Russia_Skyscrapers_Houses_Moscow_City_Night_586028_1600x1200.jpg"
      imgsrc2="https://s1.1zoom.me/b4257/101/Spain_Fortress_Houses_Granada_Alhambra_560880_1600x1200.jpg"
      imgsrc3="https://s1.1zoom.me/big0/620/Germany_Rivers_Bridges_Houses_Regensburg_Bavaria_609308_1280x851.jpg"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
