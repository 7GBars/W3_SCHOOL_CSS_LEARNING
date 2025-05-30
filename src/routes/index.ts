import { v4 as uuidv4 } from 'uuid';
import {faBorderAll} from "@fortawesome/free-solid-svg-icons";

import {
  FontsPage,
  DashBoard, PageTest, DisplayPage, TablePage,
  GridPage, DisplayContentsPage,
} from "@/pages";

import {Unit} from "@/models-view";
import { FlexPage } from "@/pages/display/flex";

import {displayValues} from "../__mocks__/units/display";

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
    icon: faBorderAll,
    subRoutes: [
      {
        id: uuidv4(),
        title: `Grid`,
        description: `Displays an element as a block-level grid container`,
        path: '/display/grid',
        payload: {},
        component: GridPage,
      },
      {
        id: uuidv4(),
        title: `Flex`,
        description: `Displays an element as a block-level flex container`,
        path: '/display/flex',
        payload: {},
        component: FlexPage,
      },
      {
        id: uuidv4(),
        title: `DisplayContents`,
        description: `Заставляет контейнер исчезнуть, делая дочерние элементы дочерними элементами элемента следующего уровня в DOM.`,
        path: '/display/displayContents',
        payload: {},
        component: DisplayContentsPage,
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
  },
  {
    id: uuidv4(),
    title: `FontsPage`,
    description: `Раздел шрифты`,
    path: '/fonts',
    payload: null,
    component: FontsPage
  }
]
