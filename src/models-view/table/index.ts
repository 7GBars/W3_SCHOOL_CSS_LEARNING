import {ReactNode} from "react";
import { UI } from '..'

export interface IColumn<T> {
  header: string;
  dataField: keyof T;
  width?: string | number;
  cellRender?: (value: T[keyof T], rowData: T) => ReactNode;
  cellBaseOptions?: UI.IBase;
}

