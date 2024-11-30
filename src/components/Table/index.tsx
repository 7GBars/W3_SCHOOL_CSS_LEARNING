import React, { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import './index.scss';


type TRowConfig = {
  height: number;
  alignment: 'left' | 'right' | 'center';
  verticalAlign: 'top' | 'middle' | 'bottom'
}
type TTableProps = {
  data: any[];
  columns: string[];

  rowConfig: TRowConfig;
  width: number | string;
}

enum TAG_NAME {
  TD = 'TD',
  TH = 'TH',
  OTHER = 'OTHER'
}

// Создаем стилизованный компонент для строк таблицы за пределами функционального компонента
const TableRow = styled.tr<{rowConfig: TRowConfig}>`
  height: ${({rowConfig: {height}}) => height}px;
  text-align: ${({rowConfig: {alignment}}) => alignment};
  vertical-align: ${({rowConfig: {verticalAlign}}) => verticalAlign};
  &:nth-child(even) { background-color: #f2f2f2; }
  &:hover { 
    background-color: #ddd;
  }
`;

export const Table: FC<TTableProps> = memo(({rowConfig, width, data, columns}) => {

  const [columnOrder, setColumnOrder] = useState<string[]>(columns);
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null);


  const tableRef = useRef<HTMLDivElement>(null);
  const isOutside = useRef<boolean>(false);


  console.log('render Table');

  useEffect(() => {
    const handleDrop = (e: DragEvent) => {
      const target = e.target as Node;
      if (isOutside.current) {
        console.log('target on drop', target);
      } else {
        columnOrder.length > 1 && setColumnOrder(cols => cols.filter(c => c !== draggedColumn))
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
  }, [draggedColumn, columnOrder]); //todo а может не надо columnOrder



  const memoizedRows = useMemo(() => {
    return data.map((rowData, index) => {
      return <TableRow rowConfig={rowConfig} key={index}>
        {columnOrder.map(c => {
          return <td key={columnOrder.indexOf(c)}>{rowData[c]}</td>
        })}
      </TableRow>
    })
  }, [data, columnOrder])


  const memoizedColumns = useMemo(() => {
    return columnOrder.map(col => <th
      key={col}
      draggable
      onDragStart={() => setDraggedColumn(col)}
      className="draggable-header"
    >
      {col}
    </th>)
  }, [columnOrder]);

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
})