import React from 'react'

type Props = {
    pages: number[],
    activePage: number,
    setActivePage: React.Dispatch<React.SetStateAction<number>>
}

export default function PaginationBar({ pages, activePage, setActivePage }: Props) {
    return (
        <div className="pagination-bar">
            <button
                onClick={() => {
                    activePage !== 1 && setActivePage(prev => prev - 1)
                }}
                className="pagination-btn">{'<'}</button>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => setActivePage(page)}
                    className={`pagination-btn ${activePage === page ? 'pagination-btn-active' : ''}`}
                >
                    {page}
                </button>

            ))}
            <button
                onClick={() => {
                    activePage !== pages[pages.length - 1] && setActivePage(prev => prev + 1)
                }}
                className="pagination-btn">{'>'}</button>
        </div>
    )
}
