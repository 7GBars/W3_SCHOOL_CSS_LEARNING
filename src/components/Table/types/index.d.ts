import React, {PropsWithChildren, ReactNode} from "react";
import {strict} from "assert";

export enum TAG_NAME {
  TD = 'TD',
  TH = 'TH',
  OTHER = 'OTHER'
};

export type TRowConfig = {
  height: number;
  alignment: 'left' | 'right' | 'center';
  verticalAlign: 'top' | 'middle' | 'bottom'
};
type TColumn<T> = {
  id: number | string;
  dataField: keyof T;
  caption?: string;
  width?: number;
};

export type TColumns<T> = Array<TColumn<T>>;

export type TTableProps<T> = {
  data: T[];
  columns: TColumns<T>;
  rowConfig: TRowConfig;
  width: number | string;
};

export type ObjectType = Record<string, ReactNode | undefined | null>;