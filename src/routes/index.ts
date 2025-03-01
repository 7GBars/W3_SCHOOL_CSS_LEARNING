import {displayValues} from "../__mocks__/units/display";

import {Display} from "../units/display/display";
import {Table} from "../components/Table";
import {Unit} from "../models-view/units";

export * from '../__mocks__/units/display';

export const units: Unit[] = [
  {
    id: '1',
    title: `Display`,
    description: `The display property is used to specify how an element is shown on a web page.
            Every HTML element has a default display value, depending on what type of element it is. The default display value for most elements is block or inline.
            The display property is used to change the default display behavior of HTML elements.`,
    path: '/display',
    payload: displayValues,
    component: Display
  },
  {
    id: 'aas',
    title: `Table`,
    description: `Раздел Таблицы`,
    path: '/table',
    payload: displayValues,
    component: Table
  },
  {
    id: 'aa21s',
    title: `Table2`,
    description: `Второй тип таблицы`,
    path: '/table',
    payload: displayValues,
    component: Table
  }
]