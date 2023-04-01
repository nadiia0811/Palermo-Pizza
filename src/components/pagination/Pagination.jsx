import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';

export const Pagination = ({currentPage, onChangePage}) => {

  return (
    <ReactPaginate  className={styles.root}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={(event) => onChangePage(event.selected + 1)}
                    pageRangeDisplayed={4}
                    pageCount={4}
                    previousLabel="<"
                    forcePage={currentPage - 1} 
                    renderOnZeroPageCount={null} />
  )
}
