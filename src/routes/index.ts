import { v4 as uuidv4 } from 'uuid';

import {displayValues} from "../__mocks__/units/display";

import {
  DashBoard, PageTest, DisplayPage, TablePage,
  GridPage
} from "../pages";

import {Unit} from "../models-view";


export * from '../__mocks__/units/display';

export const units: Unit[] = [ //todo @bars - произвести неймрефакторинг
  {
    id: uuidv4(),
    title: `Display`,
    description: `The display property is used to specify how an element is shown on a web page.
            Every HTML element has a default display value, depending on what type of element it is. The default display value for most elements is block or inline.
            The display property is used to change the default display behavior of HTML elements.`,
    path: '/display',
    payload: displayValues,
    component: DisplayPage,

    subRoutes: [
      {
        id: uuidv4(),
        title: `Grid`,
        description: `Displays an element as a block-level grid container`,
        path: '/display/grid',
        payload: {},
        component: GridPage,
      }
    ]
  },
  {
    id: uuidv4(),
    title: `Table`,
    description: `Раздел Таблицы`,
    path: '/table',
    payload: null,
    component: TablePage
  },
  {
    id: uuidv4(),
    title: `Dashboard`,
    description: `Второй тип таблицы`,
    path: '/dashboard',
    payload: null,
    component: DashBoard
  },
  {
    id: uuidv4(),
    title: `TestPage`,
    description: `Тестовая страница`,
    path: '/testPage',
    payload: null,
    component: PageTest
  }
]