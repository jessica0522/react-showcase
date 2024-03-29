import React from "react";

interface TextareaInputProps {
  label: string;
  value: string;
  row?: number;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaInput = (props: TextareaInputProps) => {
  const { label, value, row, required, onChange } = props;
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900">
      {required && <span className="text-red-600">*</span>}
      {label}
      <textarea
        rows={row || 10}
        value={value}
        onChange={(e) => onChange(e)}
        className="block w-full rounded-md border-0 mt-2 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </label>
  );
};

export default TextareaInput;
