import React from 'react';
import TableCell from './TableCell';
import {Column} from "../../models-view/table";
import type { UI } from "../../models-view";

import './index.scss'


type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  rowStyle?: (row: T, index: number) => React.CSSProperties;
  rowPadding?: string | number;
} & UI.IBase

const Table = <T,>({ columns, data, rowStyle, rowPadding }: TableProps<T>) => {
  return (
    <table id="customers">
      <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index} style={{ width: column.width }}>
            {column.header}
          </th>
        ))}
      </tr>
      </thead>
      <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}
            style={{
              padding: rowPadding,
              ...(rowStyle ? rowStyle(row, rowIndex) : {}),
            }}>
          {columns.map((column, colIndex) => (
            <TableCell key={colIndex} width={column.width}>
              {column.render
                ? column.render(row[column.accessor], row)
                : String(row[column.accessor])}
            </TableCell>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default Table;