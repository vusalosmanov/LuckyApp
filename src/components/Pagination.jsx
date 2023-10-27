import React from 'react'
import '../assets/styles/components/Pagination.scss'
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)



    const goToNextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1)
    }
    const goToPrevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <ul className='product-pagination '>
            <li>
                <button onClick={goToPrevPage}><i className='fa-solid fa-chevron-left'></i></button>
            </li>
            {pageNumbers.map((number) => (
                <li key={number}>
                    <button className={currentPage === number ? 'active' : ''} onClick={() => setCurrentPage(number)} >{number}</button>
                </li>
            ))}
            <li>
                <button onClick={goToNextPage}><i className='fa-solid fa-chevron-right'></i></button>
            </li>
        </ul>
    )
}

export default Pagination