import Navigationbar from "../Navigationbar/Navigationbar"
import React, { useMemo } from 'react'
import { useTable, usePagination, useSortBy, useGlobalFilter } from 'react-table'
import GlobalFilter from './GlobalFilter'
import { Button } from 'react-bootstrap'
import { COLUMNS } from './Columns'
import './SongTable.css'

const songData = require('../../data/songData.json')

const SongTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => songData, [])

    const tableInstance = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy, usePagination)

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canPreviousPage, canNextPage, pageOptions, state, gotoPage, pageCount, setPageSize, setGlobalFilter, prepareRow } = tableInstance

    const { pageIndex, pageSize, globalFilter } = state

    return (
        <div>
            <Navigationbar />
            <div style={{marginTop:'20px'}}>
                <span>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                </span>
                <table {...getTableProps()} style={{ marginTop: '20px' }}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                        <span>
                                            {column.isSorted
                                                ? column.isSortedDesc
                                                    ? ' 🔽'
                                                    : ' 🔼'
                                                : ''}
                                        </span></th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            page.map((row) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        ))}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div style={{ marginTop: '20px' }}>
                    <span>
                        Page{' '}
                        <strong>
                            {pageIndex + 1} of  {pageOptions.length}
                        </strong> {' '}
                    </span>{' '}
                    <span style={{ marginLeft: '10px' }}>
                        | Go to page: {' '}
                        <input type='number' defaultValue={pageIndex + 1} onChange={e => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }} style={{ width: '50px' }} />
                    </span>{' '}
                    <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
                        {
                            [10, 25, 50].map(pageSize => (
                                <option key={pageSize} value={pageSize}>
                                    Show {pageSize}
                                </option>
                            ))
                        }
                    </select>{' '}
                    <Button className='paginationButtons' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</Button>{' '}
                    <Button className='paginationButtons' onClick={() => { previousPage() }} disabled={!canPreviousPage}>Previous</Button>{' '}
                    <Button className='paginationButtons' onClick={() => { nextPage() }} disabled={!canNextPage}>Next</Button>{' '}
                    <Button className='paginationButtons' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default SongTable