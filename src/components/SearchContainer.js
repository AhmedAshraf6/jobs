import React from 'react';
import FormRow from './FormRow';
import FormSelect from './FormSelect';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice';
const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    if (isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <section className='bg-light py-3 sm:py-8 px-3 sm:px-6 rounded-lg'>
      <h1 className='text-dark text-base sm:text-lg md:text-3xl'>Search</h1>
      <form
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
        onSubmit={handleSubmit}
      >
        <FormRow
          type='text'
          name='search'
          value={search}
          handleChange={handleSearch}
        />

        {/* Select job status */}
        <FormSelect
          defaultValue={searchStatus}
          options={['all', ...statusOptions]}
          name='searchStatus'
          handleChange={handleSearch}
        />
        {/* Select job type */}
        <FormSelect
          defaultValue={searchType}
          options={['all', ...jobTypeOptions]}
          name='searchType'
          handleChange={handleSearch}
        />
        {/* Select job type */}
        <FormSelect
          defaultValue={sort}
          options={sortOptions}
          name='sort'
          handleChange={handleSearch}
        />
        <button
          className='bg-red-200 text-red-900 ext-lg  font-semibold hover:bg-red-950 hover:text-light transition-all duration-500 rounded-md  self-end py-1'
          disabled={isLoading}
          type='submit'
        >
          Clear Filters
        </button>
      </form>
    </section>
  );
};

export default SearchContainer;
