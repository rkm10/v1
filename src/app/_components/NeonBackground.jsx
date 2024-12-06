'use client';
import React, { useEffect, useState } from "react";

const NeonBackground = () => {
  const [isMouseMoveActive, setIsMouseMoveActive] = useState(false);  // Set initial to false
  const [position, setPosition] = useState("0px 0px");

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    if (!isMouseMoveActive) return;

    const { clientX: x, clientY: y } = e;
    setPosition(`${x}px ${y}px`);
  };

  // Function to handle viewport width change
  const handleResize = () => {
    if (typeof window !== "undefined") {  // Check if `window` is available
      setIsMouseMoveActive(window.innerWidth > 767);
    }
  };

  // Set up event listeners when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMouseMoveActive(window.innerWidth > 767);  // Only run this in the browser
      document.addEventListener("mousemove", handleMouseMove);
      
      // Listen for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup event listeners on component unmount
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(
          600px circle at ${position},
          rgba(29, 78, 216, 0.15),
          transparent 80%
        )`,
        transition: "background 0.1s ease",
      }}
    ></div>
  );
};

export default NeonBackground;
