import React, { useEffect, useState } from "react";

const colorArray = ["bg-green-600", "bg-green-500"];

function StartPage() {
  const [colorChangeIndex, setColorChangeIndex] = useState(0);
  const [colorChange, setColorChange] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      if (colorChangeIndex < 20) {
        setColorChangeIndex((prev) => prev + 1);
        setColorChange(colorArray[colorChangeIndex]);
      }
    }, 500);

    return () => clearInterval(id);
  }, [colorChangeIndex, colorChange, setColorChange, setColorChangeIndex]);

  return (
    <div className="">
      <h1
        className={` ${
          colorChange === "" ? "bg-green-600" : ""
        } ${colorChange}`}
      >
        Text
      </h1>
      <button className="">Test</button>
    </div>
  );
}

export default StartPage;
