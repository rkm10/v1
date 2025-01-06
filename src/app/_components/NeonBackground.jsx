'use client';
import React, { useEffect, useState, useCallback, useMemo } from "react";
import debounce from "lodash/debounce";
import throttle from "lodash/throttle";

const NeonBackground = () => {
  const [isMouseMoveActive, setIsMouseMoveActive] = useState(false);
  const [position, setPosition] = useState("0px 0px");

  const handleMouseMove = useMemo(
    () =>
      throttle((e) => {
        if (!isMouseMoveActive) return;
        const { clientX: x, clientY: y } = e;
        setPosition(`${x}px ${y}px`);
      }, 16), // ~60fps
    [isMouseMoveActive]
  );

  const handleResize = useMemo(
    () =>
      debounce(() => {
        if (typeof window !== 'undefined') {
          setIsMouseMoveActive(window.innerWidth > 767);
        }
      }, 250),
    []
  );

  useEffect(() => {
    handleResize();
    document.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      handleMouseMove.cancel();
      handleResize.cancel();
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleMouseMove, handleResize]);

  const gradientStyle = useMemo(
    () => ({
      background: `radial-gradient(
        600px circle at ${position},
        rgba(29, 78, 216, 0.15),
        transparent 80%
      )`,
      transition: 'background 0.1s linear',
      willChange: 'background',
    }),
    [position]
  );

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={gradientStyle}
    />
  );
};

export default NeonBackground;