import React, {useMemo} from "react";
import {IColumn} from "../../../models-view";
import {HeaderRow} from "../HeaderRow";

export const useHeaders = <T,>(columns: IColumn<any>[]) => {
  const memoizedHeaders = useMemo(() => {
    return <HeaderRow columns={columns} />
  }, [columns]);
  return {memoizedHeaders}
}