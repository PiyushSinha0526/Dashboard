import React, { useMemo } from "react";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  usePagination,
} from "react-table";
import MOCK_DATA from "../data/MOCK_DATA.json";
import { COLUMNS } from "../../utils/columns";
import { GlobalFilter } from "./GlobalFilter";
function BasicTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className=" p-10 py-5 font-extrabold">
        <table {...getTableProps()} className="w-full bg-gray-800 ">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="border">
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="p-4 text-left"
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className="border hover:bg-gray-700">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps}
                        className="p-3 text-left font-bold"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className=" px-10 flex justify-end gap-4 items-center">
        <span className="text-white">
          Page{" "}
          <strong className="text-purple-400">
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button
          className="px-4 py-1 rounded-lg cursor-pointer bg-white text-gray-900 font-bold active:scale-95"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          prev
        </button>
        <button
          className="px-4 py-1 rounded-lg cursor-pointer bg-white text-gray-900 font-bold active:scale-95"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          next
        </button>
      </div>
    </>
  );
}

export default BasicTable;
