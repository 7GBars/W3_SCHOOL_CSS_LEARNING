import React, {memo, useMemo} from "react";
import type {IColumn} from "../../../../models-view";

export const HeaderColumnCell = memo((
  { column }: { column: IColumn<any> }
) => {

  return <th>
    {column.header.toUpperCase()}
  </th>
});