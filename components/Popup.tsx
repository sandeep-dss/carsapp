"use client"
import React, { useEffect } from "react";

const Popup = () => {
  const [showElement, setShowElement] = React.useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 5000);
  }, []);

  return (
    <div>
      <div>
        {showElement ? (
          <div
            style={{
              width: "50vw",
              padding:"2em",
              zIndex: 20,
              background: "#0E21A0",
              color: "white",
              borderRadius:"1em",
              fontSize: "30px",
              position: "fixed",
              top:"30%",
              left:"25%",
              fontFamily: "roboto",
              textAlign: "center",
              opacity: showElement ? 0.9 : 0
            }}
          >
            😓 Sorry <br/>The Cars Image API has been removed due to being paid service. Please ignore the static images.
          </div>
        ) : (
          <div></div>
        )}{" "}
      </div>
    </div>
  );
};
export default Popup;