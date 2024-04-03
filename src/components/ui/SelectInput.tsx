import React from "react";

interface SelectInputProps {
  label: string;
  value: string;
  required?: boolean;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = ({
  label,
  value,
  options,
  required,
  onChange,
}: SelectInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {required && <span className="text-red-600">*</span>}
        {label}
        <select
          value={value}
          onChange={(e) => onChange(e)}
          className="block w-full rounded-md border-0 mt-2 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="" disabled>
            Please select
          </option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default SelectInput;
