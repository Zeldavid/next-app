import React from "react";

interface SelectProps {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, onChange }: SelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      <select
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(event) => onChange(event)}
        defaultValue=""
      >
        <option key={""} value={""}>
          {""}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
