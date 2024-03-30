import { useState, useEffect } from "react";

const Dot = ({ angle, radius }) => {
  const style = {
    position: "absolute",
    top: `calc(50% - ${radius}px)`,
    left: `calc(50% - ${radius}px)`,
    width: `${radius * 2}px`,
    height: `${radius * 1}px`,
    borderRadius: "20px",
    backgroundColor: "#B0CFDD",
    // opacity: 1, // Добавляем полупрозрачность
    transform: `rotate(${angle}deg) translateX(calc(50% + ${radius * 2.5}px))`,
  };

  return <div style={style}></div>;
};

export const Loader = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => dots.map((dot) => ({ ...dot, angle: dot.angle + 1 })));
    }, 15); // скорость вращения

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const initialDots = Array.from({ length: 8 }, (_, index) => ({
      id: index,
      angle: (index * 360) / 8,
      radius: 10,
    }));
    setDots(initialDots);
  }, []);

  return (
    <div className="App">
      {dots.map((dot) => (
        <Dot key={dot.id} angle={dot.angle} radius={dot.radius} />
      ))}
    </div>
  );
};
