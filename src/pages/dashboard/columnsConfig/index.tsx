import {
  type IColumn,
  type Issue,
  type TestStatus,
  STATUS_COLORS
} from "../../../models-view";
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
    width: '170px',
    cellRender: (value, {status}) => (
      <div
        className={'company-cell'}
        style={{color: STATUS_COLORS[status as TestStatus] || 'gray'}}
      >
        {value}
      </div>)
  },
  {
    dataField: 'status',
    header: 'Сайт',
  }
]