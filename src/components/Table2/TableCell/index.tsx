import React, {FC, PropsWithChildren, ReactNode} from 'react';
import type { UI } from "../../../models-view";

type TableCellProps = PropsWithChildren<{
  width?: string | number;
  children: ReactNode;
}> & UI.IBase;

const TableCell: FC<TableCellProps> = ({
  width,
  children,
  className,
  style
}) => {
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