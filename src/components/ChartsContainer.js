import React, { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import { useSelector } from 'react-redux';
export default function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  return (
    <div className='mt-3 md:mt-8'>
      <h2 className='text-dark text-2xl font-semibold text-center'>
        Monthly Applications
      </h2>
      <button
        type='button'
        className='text-primary font-bold w-full mx-auto mt-3'
        onClick={() => setBarChart((prev) => !prev)}
      >
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </div>
  );
}
