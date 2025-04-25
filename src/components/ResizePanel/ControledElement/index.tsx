import {forwardRef} from "react";

import {ControlledInnerElement} from "./ControlledInnerElement";
import type {PaneConfig} from "../types";

export const ControlledElementWrapper = forwardRef((props: PaneConfig, ref) => {
  return (
    <ControlledInnerElement ref={ref} {...props}/>
  )
})