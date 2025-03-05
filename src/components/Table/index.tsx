import React, {FC, memo, ReactNode, useEffect, useMemo, useRef, useState} from 'react';

import {TableRow} from "./tableRow/TableRowStyled";
import type { TTableProps, ObjectType, TColumns } from "./types";

import './index.scss';


export const TableComponent = <T extends ObjectType,>({
  data, columns: defaultColumns, rowConfig, width
}: TTableProps<T>) => {
  const [columns, setColumns] = useState<TColumns<T>>(defaultColumns);
  const [draggedColumnId, setDraggedColumnId] = useState<string | number | null>(null);

  const tableRef = useRef<HTMLDivElement>(null);
  const isOutside = useRef<boolean>(false);


  console.log('render Table');

  useEffect(() => {
    const handleDrop = (e: DragEvent) => {
      const target = e.target as Node;
      if (isOutside.current) {
        console.log('target on drop', target);
      } else {
        columns.length > 1 && setColumns(cols => cols.filter(c => c.id !== draggedColumnId))
      }
    };
    const handleGlobalDragOver = (e: DragEvent) => {
      e.preventDefault();
      const target = e.target as Node;
      if (tableRef.current?.contains(target)) {
        isOutside.current = true;
      } else {
        isOutside.current = false;
      }
    };

    window.addEventListener('drop', handleDrop);
    window.addEventListener('dragover', handleGlobalDragOver);
    return () => {
      window.removeEventListener('drop', handleDrop);
      window.addEventListener('dragover', handleGlobalDragOver);
    }
  }, [draggedColumnId, columns]); //todo а может не надо columnOrder



  const memoizedRows = useMemo(() => {
    return data?.map((rowData, index) => {
      return <TableRow rowConfig={rowConfig} key={index}>
        {columns?.map(c => {
          return <td key={columns.indexOf(c)}>{rowData[c.dataField]}</td>
        })}
      </TableRow>
    })
  }, [data, columns])


  const memoizedColumns = useMemo(() => {
    return columns?.map(col => <th
      key={col.id}
      draggable
      onDragStart={() => setDraggedColumnId(col.id)}
      className="draggable-header"
    >
      {col.caption}
    </th>)
  }, [columns]);

  return ( <div ref={tableRef} className={`table-component`}>
      <div className={'table-container'}>
        <table className={'table-container__table'} style={{width}}>
          <thead>
          <tr>
            {memoizedColumns}
          </tr>
          </thead>
          <tbody>
          {memoizedRows}
          </tbody>
        </table>
      </div>


      <div className={'navigation-container'}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
  </div>
  );
};

export const Table = memo(TableComponent) as typeof TableComponent;

