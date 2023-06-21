import PropTypes from "prop-types";
import { useTable } from "react-table";
import { nanoid } from "nanoid";

const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table className="table w-full mt-8  overflow-hidden" {...getTableProps()}>
      <thead className="rounded-lg">
        {headerGroups.map((headerGroup) => (
          <tr key={nanoid()} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                key={nanoid()}
                className="px-4 py-2 bg-blue-50 text-left"
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
            <tr key={nanoid()} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  key={nanoid()}
                  className="border px-4 py-2"
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

const ExampleTable = () => {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Location",
      accessor: "location",
    },
  ];

  const data = [
    {
      name: "John Doe",
      age: 25,
      location: "New York",
    },
    {
      name: "Jane Smith",
      age: 30,
      location: "London",
    },
    {
      name: "Bob Johnson",
      age: 35,
      location: "Paris",
    },
  ];

  return <Table columns={columns} data={data} />;
};

export default ExampleTable;
