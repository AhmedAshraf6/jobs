import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';
import { logoutUser } from '../user/userSlice';
export const allJobsThunk = async (_, thunkApi) => {
  const { page, search, searchStatus, searchType, sort } =
    thunkApi.getState().allJobs;

  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    // logout user
    return checkForUnauthorizedResponse(error, thunkApi);
  }
};
export const showStatsThunk = async (_, thunkApi) => {
  try {
    const resp = await customFetch('/jobs/stats');
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkApi);
  }
};
