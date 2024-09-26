import React from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';

const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable(
    { columns, data },
    useFilters, // Use Filters Hook
    useSortBy   // Use Sort By Hook
  );

  return (
    <div>
      <div className="mb-4">
        {/* Filter Input Example */}
        <input
          type="text"
          placeholder="Filter by Course Title"
          onChange={e => {
            setFilter('title', e.target.value || undefined); // Set undefined to remove the filter
          }}
          className="border border-gray-300 p-2"
        />
      </div>
      <table {...getTableProps()} className="min-w-full border-collapse border border-gray-300">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="border border-gray-300 p-2">
                  {column.render('Header')}
                  {/* Add sorting indicators */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="border border-gray-300 p-2">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
