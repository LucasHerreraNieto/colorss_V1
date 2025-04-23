import { useState } from "react";
import Button from "../buttons/Button";
import Color from "../color/Color";

const generarColorHex = () => {
  const randomColor = Math.floor(Math.random() * 0xffffff);
  return `#${randomColor.toString(16).padStart(6, "0")}`;
};

const generarPaleta = () =>
  Array.from({ length: 5 }, () => ({
    color: generarColorHex(),
    locked: false,
    
  }));


const Palette = () => {
  const [colors, setColors] = useState(generarPaleta);

  const handleGenerate = () => {
    const nuevosColores = colors.map((c) =>
      c.locked ? c : { ...c, color: generarColorHex() }
    );
    setColors(nuevosColores);
  };

  const toggleLock = (index) => {
    console.log("Toggling lock for:", index);
    setColors((prev) =>
      prev.map((c, i) =>
        i === index ? { ...c, locked: !c.locked } : c
      )
      
    );
  };
  
  

  return (
    <div className="flex w-full h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="absolute flex justify-between p-4 z-10">
        <Button text="Generate" onClick={handleGenerate} />
      </div>

      {colors.map((c, i) => (
        <Color
          key={i}
          color={c.color}
          locked={c.locked}
          onToggleLock={() => toggleLock(i)}
        />
      ))}
    </div>
  );
};

export default Palette;

