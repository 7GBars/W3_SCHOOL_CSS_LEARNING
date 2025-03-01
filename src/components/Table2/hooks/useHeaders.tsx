import React, {useMemo} from "react";
import {IColumn} from "../../../models-view";
import {HeaderRow} from "../HeaderRow";

export const useHeaders = <T,>(columns: IColumn<any>[]) => {
  const memoizedHeaders = useMemo(() => {
    return <HeaderRow columns={columns} />
  }, [columns]);
  const memoizedColgroup = useMemo(() => {
    return  <colgroup>
      {columns.map((column) => (
        <col
          key={column.dataField as string}
          style={{
            width: column.width ?? 'auto',
            minWidth: column.width ?? 'auto',
            maxWidth: column.width ?? 'auto'
          }}
        />
      ))}
    </colgroup>
  }, [columns]);

  return { memoizedHeaders, memoizedColgroup }
}