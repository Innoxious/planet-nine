import * as React from 'react';
import { CellProps, Column, useTable } from 'react-table';

import { Mission } from './MissionsConstants';

interface Props {
  missions: Array<Mission>;
}

const MissionTable: React.FC<Props> = (props: Props) => {
  const data: Array<Mission> = React.useMemo(() => props.missions, [props]);

  const columns: Array<Column<Mission>> = [
    {
      Header: '#',
      accessor: 'number',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Tasks',
      accessor: 'tasks',
    },
    {
      Header: 'Attempts',
      Cell: ({ cell: { row } }: CellProps<Mission>) => {
        const mission = row.original as Mission;
        return (
          <input
            min="0"
            size={2}
            step="1"
            value={mission.attempts}
            type="number"
            onChange={() => {
              return null;
            }}
          />
        );
      },
    },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table
      {...getTableProps()}
      className="table table-sm table-bordered table-dark table-striped"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MissionTable;
