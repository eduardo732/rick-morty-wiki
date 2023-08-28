import React from 'react'
import { Pagination  } from 'react-bootstrap'

const MyPagination = ({ onNextPage, onPrevPage, onPageChange, totalPages, pageNumber }) => {

	const maxVisiblePages = 5; 
  const startPage = Math.max(pageNumber - Math.floor(maxVisiblePages / 2), 1);
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);
  const pagesArray = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

	const handlePrevClick = () => {
		onPrevPage()
	}
	const handleNextClick = () => {
		onNextPage()
	}
	const handlePage = (page) => {
		onPageChange(page)
	}
	return (
		<Pagination>
      <Pagination.Prev onClick={() => handlePrevClick()} disabled={pageNumber === 1}/>
			{pagesArray.map((page) => (
        <Pagination.Item
          key={page}
          active={page === pageNumber}
          onClick={() => handlePage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => handleNextClick()} disabled={pageNumber === totalPages}/>
    </Pagination>
	)
}

export default MyPagination

