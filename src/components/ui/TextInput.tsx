import React from "react";

interface TextInputProps {
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = (props: TextInputProps) => {
  const { type, label, value, onChange } = props;
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900">
      {label}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        className="w-full mt-2 p-2 border rounded-md"
      />
    </label>
  );
};

export default TextInput;
