'use client';
import React, { useEffect, useState, useCallback } from "react";
import { throttle } from "lodash";

const NeonBackground = () => {
  const [isMouseMoveActive, setIsMouseMoveActive] = useState(false); // Set initial to false
  const [position, setPosition] = useState("0px 0px");

  // Function to handle mouse movement
  const handleMouseMove = useCallback(
    throttle((e) => {
      if (!isMouseMoveActive) return;
      const { clientX: x, clientY: y } = e;
      setPosition(`${x}px ${y}px`);
    }, 100), // Throttle mousemove to 100ms
    [isMouseMoveActive]
  );

  // Function to handle viewport width change
  const handleResize = useCallback(() => {
    setIsMouseMoveActive(window.innerWidth > 767);
  }, []);

  useEffect(() => {
    setIsMouseMoveActive(window.innerWidth > 767); // Initial check
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleMouseMove, handleResize]);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        background: `radial-gradient(
          600px circle at ${position},
          rgba(29, 78, 216, 0.15),
          transparent 80%
        )`,
      }}
    ></div>
  );
};

export default NeonBackground;
