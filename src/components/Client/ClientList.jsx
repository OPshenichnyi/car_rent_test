import { ClientCard } from "./ClientCard";
import { useTable } from "react-table";
import clientFakeDb from "./clientFakeDb.json";
import { Table } from "./ClientListStyle";
import * as React from "react";

export const ClientList = () => {
  const data = React.useMemo(() => clientFakeDb, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name Company",
        accessor: "nameCompany",
      },
      {
        Header: "Contact Person",
        accessor: "nameContactPerson",
      },
      {
        Header: "Phone number",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Location",
        accessor: "location",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <>
      <ClientCard></ClientCard>
      <div>
        <Table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
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
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};
