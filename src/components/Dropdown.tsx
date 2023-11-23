import React, { useState } from "react";

interface Option {
  id: string;
  name: string;
}

interface DropdownProps {
  options: Option[];
  onSelect: (selectedOption: Option | null) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (
    <div className="dropdown">
      <label
        htmlFor="hs-select-label"
        className="block text-sm font-medium mb-2 dark:text-white"
      >
        select Crop
      </label>
      <select
        className="py-3 px-4 pr-9 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        value={selectedOption ? selectedOption.id : ""}
        onChange={(e) => {
          const selectedId = e.target.value;
          const selected = options.find((option) => option.id === selectedId);
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          handleSelect(selected || null);
        }}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
