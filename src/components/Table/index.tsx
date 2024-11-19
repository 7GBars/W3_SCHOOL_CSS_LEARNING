import React, { FC } from 'react';
import styled from 'styled-components';
import './index.scss';

type TTableProps = {
  width: number | string;
  rowHeight: number;
}

// Создаем стилизованный компонент для строк таблицы за пределами функционального компонента
const TableRow = styled.tr<{ rowHeight: number }>`
  height: ${props => props.rowHeight}px;
`;

export const Table: FC<TTableProps> = ({ rowHeight, width }) => {
  return (
    <table className={'my_table'} style={{ width }}>
      <thead>
      <TableRow rowHeight={rowHeight}>
        <th>Name</th>
        <th>ManOrWomen</th>
        <th>Age</th>
      </TableRow>
      </thead>
      <tbody>
      <TableRow rowHeight={rowHeight}>
        <td>Alfreds Futterkiste</td>
        <td>man</td>
        <td>20</td>
      </TableRow>
      <TableRow rowHeight={rowHeight}>
        <td>Nancy</td>
        <td>women</td>
        <td>25</td>
      </TableRow>
      <TableRow rowHeight={rowHeight}>
        <td>Ash</td>
        <td>man</td>
        <td>25</td>
      </TableRow>
      </tbody>
    </table>
  );
}