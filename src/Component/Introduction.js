//AboutMe에 포함된 메뉴 버튼
import { useState } from "react";
import intros from "./Data/selfintros";
import "./CSS/AboutMe.css";

function Introduction() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="introduction">
      {intros.map((intro, index) => (
        <button onClick={contentChange} value={index}>
          {intro.tab}
        </button>
      ))}
      <br /> <br />
      {intros[index].content}
    </div>
  );
}

export default Introduction;
