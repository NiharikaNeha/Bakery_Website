import React from "react";
import { motion } from "framer-motion";
import { Leaf, Drumstick } from "lucide-react";

/**
 * A premium sliding toggle component for Veg/Non-Veg filtering.
 * @param {string} value - Current value ('all', 'veg', 'non-veg')
 * @param {function} onChange - Callback function when selection changes
 */
const VegToggle = ({ value, onChange }) => {
  const options = [
    { id: "all", label: "All", icon: null },
    { id: "veg", label: "Veg", icon: <Leaf className="w-3.5 h-3.5" /> },
    {
      id: "non-veg",
      label: "Non-Veg",
      icon: <Drumstick className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <div className="flex bg-neutral-100 p-1 rounded-2xl border border-neutral-200 w-fit relative overflow-hidden shadow-inner">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={`relative z-10 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-colors duration-300 flex items-center gap-2 ${
            value === option.id
              ? "text-white"
              : "text-neutral-500 hover:text-neutral-700 font-bold"
          }`}
        >
          {option.icon && (
            <span
              className={
                value === option.id
                  ? "text-white"
                  : option.id === "veg"
                    ? "text-green-500"
                    : "text-red-500"
              }
            >
              {option.icon}
            </span>
          )}
          {option.label}

          {value === option.id && (
            <motion.div
              layoutId="toggleBackground"
              className={`absolute inset-0 z-[-1] rounded-xl shadow-lg border border-white/20 ${
                option.id === "veg"
                  ? "bg-green-600 shadow-green-100"
                  : option.id === "non-veg"
                    ? "bg-red-600 shadow-red-100"
                    : "bg-orange-600 shadow-orange-100"
              }`}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default VegToggle;
