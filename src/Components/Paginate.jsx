import React, {useEffect} from 'react';
import "../index.css"

const Paginate = ({ totalPages, currentPage, setCurrentPage }) => {

    {/*Navigation*/}
    const pageNumbers = [...Array(totalPages + 1).keys()].slice(1)

    const nextPage = () => {
            if(currentPage !== totalPages) setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    return (
        <nav
          className="paginate">
            <ul className='flex'>
                <li className="page-item">
                    <button
                        disabled={currentPage === 1}
                        className='border-2 rounded-md px-4 py-2 text-[#F4511E] hover:bg-[#F4511E] hover:text-white'
                        onClick={prevPage}
                        >

                        First
                    </button>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber}
                        className= {`text-[#F4511E] focus:text-white ${currentPage == pgNumber ? 'active' : ''} `}

                         >

                        <button onClick={() => setCurrentPage(pgNumber)}
                            className='border-2 rounded-md px-4 py-2 hover:bg-[#F4511E] hover:text-white'
                          >

                            {pgNumber}
                        </button>
                    </li>
                ))}
                <li className="page-item">
                    <button
                        disabled={currentPage === 3}
                        className='border-2 rounded-md px-4 py-2 text-[#F4511E] hover:bg-[#F4511E] hover:text-white'
                        onClick={nextPage}
                        >

                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Paginate;
