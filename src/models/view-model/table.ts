import {ReactNode} from "react";

export interface Column<T> {
  header: string;
  accessor: keyof T;
  width?: string | number;
  render?: (value: T[keyof T], row: T) => ReactNode; // Кастомный рендеринг
}

