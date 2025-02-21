import React from "react";
import SelectItem from "./select-item";

export default function SelectMenu({
  options,
  currentOption,
  updateOption,
}: {
  options: string[];
  currentOption: string;
  updateOption: (option: string) => void;
}) {
  const updateCurrentFilter = (filter: string) => {
    if (options.includes(filter)) {
      updateOption(filter);
    }
  };

  return (
    <ul className="px-5 py-3 flex flex-col bg-white shadow rounded-2 text-preset-4 text-grey-900 gap-y-3">
      {options.map((option, index) => (
        <React.Fragment key={option}>
          <SelectItem
            updateFilter={() => updateCurrentFilter(option)}
            active={option === currentOption}
          >
            {option}
          </SelectItem>
          {index !== options.length - 1 && (
            <div id="separator" className="h-px bg-grey-100 w-full"></div>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}
