import {memo} from "react";

import TableCell from "./TableCell";
import {IColumn} from "../../../models-view";

export const TableRow = memo(({ row, columns }: { row: any; columns: IColumn<any>[] }) => (
  <tr>
    {columns.map((column, colIndex) => {
      const baseOptions = column.cellBaseOptions;
      return <TableCell key={colIndex} className={baseOptions?.className} style={baseOptions?.style}>
        { column.cellRender
          ? column.cellRender(row[column.dataField], row)
          : String(row[column.dataField]) }
      </TableCell>
    })}
  </tr>
));