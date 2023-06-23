import PropTypes from "prop-types";
import { useTable } from "react-table";
import { nanoid } from "nanoid";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="overflow-x-auto shadow-md">
      <table className="table w-full mt-8" {...getTableProps()}>
        <thead className="rounded-xl ">
          {headerGroups.map((headerGroup) => (
            <tr
              className="table-row"
              key={nanoid()}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  key={nanoid()}
                  className="p-4 bg-blue-50 text-left"
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr className="table-row" key={nanoid()} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    key={nanoid()}
                    className="table-cell border p-6 sm:p-4"
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
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
// table props
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
