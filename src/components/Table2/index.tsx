import React from 'react';

import type { UI, IColumn } from "../../models-view";
import { classNames } from "../../helpers";
import { useRows, useHeaders} from "./hooks";

import './index.scss'


type TableProps<T> = {
  columns: IColumn<T>[];
  data: T[];
  height: number | string;
} & UI.IBase

const Table = <T,>({ columns, data, height, className, style, id }: TableProps<T>) => {

  const cls = classNames('table-data-component', {}, [className]);
  const { memoizedRows } = useRows<T>(data, columns);
  const { memoizedHeaders , memoizedColgroup} = useHeaders<T>(columns);

  return (
    <div className={'table-container'} style={{height}}>
      <table id={id} className={cls} style={style}>
        {memoizedColgroup}
        <thead>
          {memoizedHeaders}
        </thead>
        <tbody>
          {memoizedRows}
        </tbody>
      </table>
    </div>

  );
};

export default Table;