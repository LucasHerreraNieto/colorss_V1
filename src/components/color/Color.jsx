import { useState } from "react";
import { Lock, Unlock } from "lucide-react"; 

const Color = ({ color, locked, onToggleLock }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setCopied(true);
      setTimeout(() => setCopied(false), 500);
    } catch (err) {
      console.error("Error al copiar al portapapeles", err);
    }
  };

  return (
    <div
      className="relative h-full flex-1 flex items-center justify-center transition-all duration-300"
      style={{ backgroundColor: color }}
      onClick={handleCopy}
    >
      <p className="text-5xl text-white drop-shadow-md">
        {copied ? "Copied!" : color}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleLock();
        }}
        className="absolute top-4 right-4 text-white bg-black/30 p-2 rounded-full cursor-pointer"
      >
        {locked ? <Lock size={20} /> : <Unlock size={20} />}
      </button>
    </div>
  );
};

export default Color;
