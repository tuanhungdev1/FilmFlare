import React from "react";

interface SlideDotProps {
  isActive: boolean;
  onClick: () => void;
}

const SlideDot: React.FC<SlideDotProps> = ({ isActive, onClick }) => {
  return (
    <li
      className={`w-6 h-1 cursor-pointer ${
        isActive ? "bg-slate-100" : "bg-slate-600"
      }`}
      onClick={onClick}
    ></li>
  );
};

export default SlideDot;
