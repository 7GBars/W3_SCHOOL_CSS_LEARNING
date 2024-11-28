import React, {FC, memo, useCallback, useMemo, useRef, useState} from 'react';
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
    font-style: italic;
  }
`;

export const Table: FC<TTableProps> = memo(({rowConfig, width, data, columns}) => {

  const [columnOrder, setColumnOrder] = useState(columns);
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null);
  const isInsideDrop = useRef<boolean>(false);

  const tableRef = useRef<HTMLDivElement>(null);



  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.stopPropagation();

    const relatedElement = e.relatedTarget as HTMLElement;

    if(relatedElement === null) {return}
    console.log(relatedElement)
    if (relatedElement.tagName === TAG_NAME.TD) {
      isInsideDrop.current = false;
    } else if (relatedElement.tagName === TAG_NAME.TH) {
      isInsideDrop.current = true;
    } else {
      console.log('e.relatedTarget ', e.relatedTarget )
    }
    // Проверяем, действительно ли курсор покинул контейнер таблицы
    // if (tableRef.current?.contains(e.relatedTarget as Node)) {
    //   console.log('Drag left the table container');
    //   isInsideDrop.current = false;
    // } todo @bar - почему не работает
  }, []);

  const handleDragStart = useCallback((column: string) => {
    console.log('Drag started');
    setDraggedColumn(column);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault(); // Чтобы разрешить drop
  }, []);

  const handleDrop = useCallback(
    (targetColumn: string) => {
      if (!draggedColumn) return;
      const newOrder = [...columnOrder];
      const fromIndex = newOrder.indexOf(draggedColumn);
      const toIndex = newOrder.indexOf(targetColumn);

      newOrder.splice(fromIndex, 1);
      newOrder.splice(toIndex, 0, draggedColumn);

      setColumnOrder(newOrder);
      console.log('Dropped on column:', targetColumn);
    },
    [draggedColumn, columnOrder]
  );

  const memoizedColumns = useMemo(() => {
    return columnOrder.map(col => <th
      key={col}
      draggable
      onDragStart={() => handleDragStart(col)}
      onDragOver={handleDragOver}
      onDrop={() => handleDrop(col)}
      className="draggable-header"
    >
      {col}
    </th>)
  }, [columnOrder]);

  const memoizedRows = useMemo(() => {
    return data.map((rowData, index) => {
      return <TableRow rowConfig={rowConfig} key={index}>
        {columnOrder.map(c => {
          console.log('rowData, ', rowData)
          return <td key={columnOrder.indexOf(c)}>{rowData[c]}</td>
        })}
      </TableRow>
    })
  }, [data, columnOrder])




  return ( <div className={'table-component'}>

      <div
        className={'table-container'}
        onDragLeave={handleDragLeave}
        ref={tableRef}
      >
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