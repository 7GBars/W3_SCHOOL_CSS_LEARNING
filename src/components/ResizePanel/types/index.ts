import {PosNeg} from "react-reflex";


type PaneDirection = PosNeg | [PosNeg, PosNeg]

export type PaneConfig = {
  id: string
  name: string
  minSize: number
  direction?: PaneDirection;
  orientation?: 'vertical' | 'horizontal'
}
