import React from 'react';

export default function JobInfo({ Icon, text }) {
  return (
    <div className='col-span-2 sm:col-span-1  flex items-center gap-2 text-dark '>
      <Icon className='text-gray-400 text-sm' />
      <h5>{text}</h5>
    </div>
  );
}
