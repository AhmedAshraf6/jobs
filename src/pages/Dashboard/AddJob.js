import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import FormRow from '../../components/FormRow';
import FormSelect from '../../components/FormSelect';
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice';
import { useEffect } from 'react';
const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;
    }
    dispatch(createJob({ position, company, jobLocation, status, jobType }));
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, []);
  return (
    <section className='bg-light py-3 sm:py-8 px-3 sm:px-6 rounded-lg'>
      <h1 className='text-dark text-base sm:text-lg md:text-3xl'>
        {isEditing ? 'Edit Job' : 'Profile'}
      </h1>
      <form
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
        onSubmit={handleSubmit}
      >
        <FormRow
          type='text'
          name='position'
          value={position}
          handleChange={handleJobInput}
        />
        <FormRow
          type='text'
          labelText='company'
          name='company'
          value={company}
          handleChange={handleJobInput}
        />
        <FormRow
          type='text'
          name='jobLocation'
          value={jobLocation}
          handleChange={handleJobInput}
        />
        {/* Select job status */}
        <FormSelect
          defaultValue={status}
          options={statusOptions}
          name='status'
          handleChange={handleJobInput}
        />
        {/* Select job type */}
        <FormSelect
          defaultValue={jobType}
          options={jobTypeOptions}
          name='jobType'
          handleChange={handleJobInput}
        />
        <div className='self-end flex gap-x-3 '>
          <button
            className='bg-primary hover:bg-primaryHover text-lg text-light rounded-md transition-colors duration-200  flex-1 py-1'
            disabled={isLoading}
            type='submit'
          >
            {isLoading ? 'Please Wait...' : 'Submit'}
          </button>
          <button
            className='bg-gray-600 hover:bg-gray-900 text-lg text-light rounded-md transition-colors duration-200  flex-1 py-1'
            disabled={isLoading}
            type='button'
            onClick={() => dispatch(clearValues())}
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddJob;
