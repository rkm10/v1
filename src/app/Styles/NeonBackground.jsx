'use client';
import React, { useEffect, useState } from "react";

const NeonBackground = () => {
  const [isMouseMoveActive, setIsMouseMoveActive] = useState(window.innerWidth > 767);
  const [position, setPosition] = useState("0px 0px");

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    if (!isMouseMoveActive) return;

    const { clientX: x, clientY: y } = e;
    setPosition(`${x}px ${y}px`);
  };

  // Function to handle viewport width change
  const handleResize = () => {
    setIsMouseMoveActive(window.innerWidth > 767);
  };

  // Set up event listeners
  useEffect(() => {
    if (isMouseMoveActive) {
      document.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMouseMoveActive]);

  // Listen for window resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
