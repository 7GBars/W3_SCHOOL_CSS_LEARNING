import {FC} from "react";

export type Unit<T = any>= {
  id: string;
  title: string;
  description: string;
  path: string;
  payload: any;
  component: FC<T>;
};