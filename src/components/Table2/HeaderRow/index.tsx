import React, {memo} from "react";

import {IColumn} from "../../../models-view";
import {HeaderColumnCell} from "./HeaderColumn";

export const HeaderRow = memo(({columns}: { columns: IColumn<any>[] }) => (
  <tr>
    {
      columns.map((column, index) => {
        return <HeaderColumnCell
          key={column.dataField as string}
          column={column}
        />
      })
    }
  </tr>
));