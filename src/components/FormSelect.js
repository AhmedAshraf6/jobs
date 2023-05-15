import React from 'react';

export default function FormSelect({
  name,
  defaultValue,
  options,
  handleChange,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {name}
      </label>
      <select
        className='block w-full px-4 py-2 mt-2 text-dark text-lg bg-white border  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-dark sm:text-sm cursor-pointer'
        onChange={handleChange}
        value={defaultValue}
        name={name}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
