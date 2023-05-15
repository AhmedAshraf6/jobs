import React from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../features/allJobs/allJobsSlice';
export default function PageBtnContainer() {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  return (
    <div className='mt-4 sm:mt-10 flex items-center justify-end gap-3'>
      <button
        className='bg-light rounded-md py-2 px-3 text-lg flex items-center justify-center gap-2 text-primary cursor-pointer hover:text-light hover:bg-primary transition-all duration-200'
        onClick={prevPage}
      >
        <HiChevronDoubleLeft />
        Prev
      </button>
      <div>
        {pages.map((pageNumber) => (
          <span
            className={`py-2 px-5 text-center text-xl cursor-pointer rounded-md font-bold ${
              page === pageNumber
                ? 'text-light bg-primary'
                : 'text-primary bg-slate-200'
            }`}
            key={pageNumber}
            onClick={() => dispatch(changePage(pageNumber))}
          >
            {pageNumber}
          </span>
        ))}
      </div>
      <button
        className='bg-light rounded-md py-2 px-3 text-lg flex items-center justify-center gap-2 text-primary cursor-pointer hover:text-light hover:bg-primary transition-all duration-200'
        onClick={nextPage}
      >
        Next
        <HiChevronDoubleRight />
      </button>
    </div>
  );
}
