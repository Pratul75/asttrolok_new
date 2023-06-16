import PropTypes from "prop-types";
import { useTable } from "react-table";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleRowClick = (row) => {
    console.log("Clicked row:", row.original);
  };

  return (
    <table className="table-auto w-full" {...getTableProps()}>
      <thead>
        {headerGroups?.map((headerGroup, idx) => (
          <tr key={idx} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th key={idx} className="px-4 py-2" {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
            <th className="px-4 py-2">Action</th>
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows?.map((row, rowIdx) => {
          prepareRow(row);
          return (
            <tr key={rowIdx} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  key={rowIdx}
                  className="border px-4 py-2"
                  {...cell.getCellProps()}
                >
                  {cell.render("Cell")}
                </td>
              ))}
              <td className="border px-4 py-2">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleRowClick(row)}
                >
                  Log
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
