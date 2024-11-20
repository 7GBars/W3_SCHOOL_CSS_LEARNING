import React, {FC, memo, useMemo} from 'react';
import styled from 'styled-components';
import './index.scss';

type TTableProps = {
  width: number | string;
  rowHeight: number;
  data: any[];
  columns: string[];
}

// Создаем стилизованный компонент для строк таблицы за пределами функционального компонента
const TableRow = styled.tr<{ rowHeight: number }>`
  height: ${props => props.rowHeight}px;
`;

export const Table: FC<TTableProps> = memo(({rowHeight, width, data, columns}) => {
  const memoizedColumns = useMemo(() => {
    return columns.map(c => <th>{c}</th>)
  }, [columns]);

  const memoizedRows = useMemo(() => {
    return data.map(rowData => {
      return <TableRow rowHeight={rowHeight}>
        {columns.map(c => {
          console.log('rowData, ', rowData)
          return <td>{rowData[c]}</td>
        })}
      </TableRow>
    })
  }, data)

  return ( <div className={'table-component'}>

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