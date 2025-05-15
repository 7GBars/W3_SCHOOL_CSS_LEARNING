import type {
  AlignItemsOptionType,
  HeightOptionType,
  JustifyContentOptionType
} from "../types";

export const JUSTIFY_CONTENT_OPTIONS: Array<JustifyContentOptionType> = [
  {
    id: 1,
    value: 'flex-start',
  },
  {
    id: 2,
    value: 'flex-end',
  },
  {
    id: 3,
    value: 'center',
  },
  {
    id: 4,
    value: 'space-between',
  },
  {
    id: 5,
    value: 'space-around',
  },
  {
    id: 6,
    value: 'space-evenly',
  }
];

export const ALIGN_ITEMS_OPTIONS: Array<AlignItemsOptionType> = [
  {
    id: 0,
    value: 'stretch',
  },
  {
    id: 1,
    value: 'flex-start',
  },
  {
    id: 2,
    value: 'flex-end',
  },
  {
    id: 3,
    value: 'center',
  },
  {
    id: 4,
    value: 'baseline',
  },

];
export const CONTAINER_HEIGHT_OPTIONS: Array<HeightOptionType> = [
  {
    id: 1,
    value: '100%',
  },
  {
    id: 2,
    value: '200px',
  },
  {
    id: 3,
    value: 'max-content',
  },
  {
    id: 4,
    value: '100vh',
  },
]
