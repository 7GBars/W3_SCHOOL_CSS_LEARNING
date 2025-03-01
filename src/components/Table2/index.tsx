import React from 'react';
import TableCell from './TableCell';
import {Column} from "../../models-view/table";
import type { UI } from "../../models-view";
import {classNames} from "../../helpers";

import './index.scss'


type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  height: number | string;
} & UI.IBase

const Table = <T,>({ columns, data, height, className, style, id }: TableProps<T>) => {

  const cls = classNames('table-data-component', {}, [className]);

  return (

    <div className={'table-container'} style={{height}}>
      <table id={id} className={cls} style={style}>
        <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ width: column.width }}>
              {column.header.toUpperCase()}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
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
    </div>

  );
};

export default Table;