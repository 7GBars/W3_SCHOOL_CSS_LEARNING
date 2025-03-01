import TableCell from "../TableRow/TableCell";
import React, {useMemo} from "react";
import {IColumn} from "../../../models-view";
import {TableRow} from "../TableRow";

export const useRows = <T,>(data: T[], columns: IColumn<T>[]) => {
  const memoizedRows = useMemo(() => {
    return data.map((row, rowIndex) => (
      <TableRow key={rowIndex} row={row} columns={columns}/>
    ));
  }, [])
  return { memoizedRows }
}