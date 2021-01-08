/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import { Table } from "react-bootstrap";
import { Column, useSortBy, useTable } from "react-table";

import { Mission } from "./Missions";

type Props = {
  missions: Array<Mission>;
}

const MissionTable: React.FC<Props> = (props: Props) => {
  const data: Array<Mission> = React.useMemo(() => props.missions, [props]);

  const columns: Array<Column<Mission>> = [
    {
      Header: "#",
      accessor: "number",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Tasks",
      accessor: "tasks",
    },
    {
      Header: "Attempts",
      Cell: () => <input min="0" size={2} step="1" type="number" />,
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <Table {...getTableProps()} size="sm" variant="dark" bordered hover striped>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MissionTable;
