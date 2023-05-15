import React from 'react';
import FormRow from '../../components/FormRow';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../features/user/userSlice';

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;

    if (!name || !email || !lastName || !location) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    dispatch(updateUser(userData));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <section className='bg-light py-3 sm:py-8 px-3 sm:px-6 rounded-lg'>
      <h1 className='text-dark text-base sm:text-lg md:text-3xl'>Profile</h1>
      <form
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
        onSubmit={handleSubmit}
      >
        <FormRow
          type='text'
          name='name'
          value={userData.name}
          handleChange={handleChange}
        />
        <FormRow
          type='text'
          labelText='last name'
          name='lastName'
          value={userData.lastName}
          handleChange={handleChange}
        />
        <FormRow
          type='email'
          name='email'
          value={userData.email}
          handleChange={handleChange}
        />
        <FormRow
          type='text'
          name='location'
          value={userData.location}
          handleChange={handleChange}
        />
        <button
          className='bg-primary hover:bg-primaryHover text-lg text-light rounded-md transition-colors duration-200 self-end py-1'
          disabled={isLoading}
          type='submit'
        >
          {isLoading ? 'Please Wait...' : 'save changes'}
        </button>
      </form>
    </section>
  );
};

export default Profile;
