import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment/moment';
import JobInfo from './JobInfo';
import { setEditJob, deleteJob } from '../features/job/jobSlice';

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format('MMM Do, YYYY');

  return (
    <div className='bg-light rounded-lg col-span-2 lg:col-span-1'>
      <div className='py-2 sm:py-4 px-4 sm:px-6 flex gap-4'>
        <div className='bg-primary w-[50px] h-[50px] flex justify-center items-center rounded-md text-light text-xl font-bold'>
          {company.charAt(0)}
        </div>
        <div>
          <h4 className='text-lg text-dark'>{position}</h4>
          <h6 className='text-gray-400 text-sm'>{jobLocation}</h6>
        </div>
      </div>
      <hr />
      <div className='grid grid-cols-2 gap-y-3 sm:gap-y-5 py-2 sm:py-4 px-4 sm:px-6'>
        <JobInfo Icon={FaLocationArrow} text={jobLocation} />
        <JobInfo Icon={FaCalendarAlt} text={date} />
        <JobInfo Icon={FaBriefcase} text={jobType} />
        <span
          className={`col-span-1 w-max px-1 rounded-md capitalize ${
            status === 'pending'
              ? 'bg-yellow-100 text-yellow-400 '
              : status === 'interview'
              ? 'bg-blue-100 text-blue-400 '
              : 'bg-red-100 text-red-400 '
          }`}
        >
          {status}
        </span>
      </div>
      <div className='py-2 sm:py-4 px-4 sm:px-6 flex gap-3'>
        <Link
          className='flex items-center justify-center  bg-[#d1e7dd] text-[#0f5132] capitalize py-1 px-2 rounded-md text-sm'
          to='/add-job'
          onClick={() => {
            dispatch(
              setEditJob({
                editJobId: _id,
                position,
                company,
                jobLocation,
                jobType,
                status,
              })
            );
          }}
        >
          edit
        </Link>
        <button
          className='flex items-center justify-center bg-red-200 text-red-900 capitalize py-1 px-2 rounded-md text-sm '
          onClick={() => {
            dispatch(deleteJob(_id));
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Job;
