import React, { useState, useEffect } from "react";
import "./Progressbar.css";
export default function Progressbar({ time }) {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  //   if (progress) {
  //     useEffect();
  //   } else {
  //     console.log("NAO");
  //   }
  //   console.log(time);

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), time / 1000);
    }
  }, [filled, isRunning, time]);
  return (
    <div>
      <div className="progressbar">
        <div
          style={{
            height: "100%",
            width: `${filled}%`,
            backgroundColor: "#a66cff",
            transition: "width 0.5s",
          }}
        ></div>
        <span className="progressPercent">{filled}%</span>
      </div>

      <button
        className="btn"
        onClick={() => {
          setIsRunning(true);
        }}
      >
        Run
      </button>
    </div>
  );
}
