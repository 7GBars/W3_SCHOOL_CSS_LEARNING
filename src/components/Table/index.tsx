import React, {FC, memo, useMemo} from 'react';
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

// Создаем стилизованный компонент для строк таблицы за пределами функционального компонента
const TableRow = styled.tr<{rowConfig: TRowConfig}>`
  height: ${({rowConfig: {height}}) => height}px;
  text-align: ${({rowConfig: {alignment}}) => alignment};
  vertical-align: ${({rowConfig: {verticalAlign}}) => verticalAlign};
`;

export const Table: FC<TTableProps> = memo(({rowConfig, width, data, columns}) => {
  const memoizedColumns = useMemo(() => {
    return columns.map(c => <th>{c}</th>)
  }, [columns]);

  const memoizedRows = useMemo(() => {
    return data.map(rowData => {
      return <TableRow rowConfig={rowConfig}>
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