import React, {FC, PropsWithChildren, ReactNode} from 'react';
import type { UI } from "../../../../models-view";

type TableCellProps = PropsWithChildren<{
  children: ReactNode;
}> & UI.IBase;

const TableCell: FC<TableCellProps> = ({
  children,
  className,
  style
}) => {
  return (
    <td
      style={{ ...style }}
      className={className}
    >
      {children}
    </td>
  );
};

export default TableCell;