import React, { ReactNode } from 'react';

interface TableCellProps {
  width?: string | number; // Ширина ячейки
  children: ReactNode; // Контент ячейки
  className?: string; // Дополнительные классы
  style?: React.CSSProperties; // Дополнительные стили
}

const TableCell = ({ width, children, className, style }: TableCellProps) => {
  return (
    <td
      style={{ width, ...style }}
      className={className}
    >
      {children}
    </td>
  );
};

export default TableCell;