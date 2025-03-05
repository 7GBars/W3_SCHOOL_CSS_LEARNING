import {IColumn, Issue} from "../../../models-view";
import {CompanyCellTemplate} from "./templates";

export const dashBoardColumnsConfig: IColumn<Issue>[] = [
  {
    dataField: 'name',
    header: 'Name',
    width: '400px',
    cellRender: (value, rowData) => <CompanyCellTemplate value={value.toString()} issue={rowData} />
  },
  {
    dataField: 'type',
    header: 'Тип',
    width: '150px'
  },
  {
    dataField: 'status',
    header: 'Статус',
    width: '170px'
  },
  {
    dataField: 'status',
    header: 'Сайт',
  }
]