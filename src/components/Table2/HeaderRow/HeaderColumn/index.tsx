import {memo} from "react";
import type {IColumn} from "../../../../models-view";

export const HeaderColumnCell = memo((
  { column }: { column: IColumn<any> }
) => {
  console.log('column' , column.width)
  return <th style={{width: column.width}}>
    {column.header.toUpperCase()}
  </th>
});