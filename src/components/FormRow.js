import React from 'react';

export default function FormRow({
  type,
  name,
  value,
  handleChange,
  labelText,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {labelText || name}
      </label>
      <div className='mt-2'>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className='block w-full rounded-md border-0 py-1.5 text-dark shadow-sm ring-1 ring-inset  placeholder:text-gray-400 focus:primary sm:text-sm sm:leading-6 px-2'
        />
      </div>
    </div>
  );
}
