import React from 'react';
import TableCell from './TableCell';
import {Column} from "../../models/view-model/table";

import './index.scss'


interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowStyle?: (row: T, index: number) => React.CSSProperties; // Стили для строки
  rowPadding?: string | number; // Отступ для строки
}

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
              padding: rowPadding, // Применяем отступ для строки
              ...(rowStyle ? rowStyle(row, rowIndex) : {}), // Применяем стили для строки
            }}>
          {columns.map((column, colIndex) => (
            <TableCell key={colIndex} width={column.width}>
              {column.render
                ? column.render(row[column.accessor], row) // Используем кастомный рендеринг
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