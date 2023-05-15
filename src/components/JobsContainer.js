import { useEffect } from 'react';
import Job from './Job';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import { getAllJobs } from '../features/allJobs/allJobsSlice';
import PageBtnContainer from './PageBtnContainer';
const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);
  if (isLoading) {
    return (
      <div className='mt-3'>
        <Loading />;
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <h1 className='text-lg sm:text-2xl text-dark'>No jobs to display...</h1>
    );
  }
  return (
    <section className='mt-3 sm:mt-8 py-3 sm:py-8 px-3 sm:px-6 rounded-lg'>
      <h2 className='mb-3 text-dark text-md sm:text-2xl '>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h2>
      <div className='grid grid-cols-2 gap-3'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </section>
  );
};

export default JobsContainer;
