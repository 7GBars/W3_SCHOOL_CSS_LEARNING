import {FC} from "react";
import type {IconDefinition} from "@fortawesome/free-regular-svg-icons";

export type Unit<T = any>= {
  id: string;
  title: string;
  description: string;
  path: string;
  payload: any;
  component: FC<T>;
  icon?:  IconDefinition;
  subRoutes?: Unit[];
};
