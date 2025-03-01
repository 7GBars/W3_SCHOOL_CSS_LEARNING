import {IColumn} from "../../models-view/table";
import { CompanyCellTemplate } from "./templates";

export const testColumns: IColumn<CompanyData>[] = [
  {
    header: 'Company',
    dataField: 'company',
    width: '430px',
    cellRender: (value, rowData) => <CompanyCellTemplate value={value}/>,
  },
  {
    header: 'Contact',
    dataField: 'contact',
    width: '130px',
    cellRender: (value, row) => (
      <span style={{ color: row.country === 'Germany' ? 'green' : 'inherit' }}>
          {value}
        </span>
    ), // Зеленый цвет для Germany
  },
  {
    header: 'Country',
    dataField: 'country',
  },
];

export const testData: CompanyData[] = [
  { company: 'Alfreds Futterkiste', contact: 'Maria Anders', country: 'Germany' },
  { company: 'Berglunds snabbköp', contact: 'Christina Berglund', country: 'Sweden' },
  { company: 'Centro comercial Moctezuma', contact: 'Francisco Chang', country: 'Mexico' },
  { company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria' },
  { company: 'Island Trading', contact: 'Helen Bennett', country: 'UK' },
  { company: 'Königlich Essen', contact: 'Philip Cramer', country: 'Germany' },
  { company: 'Laughing Bacchus Winecellars', contact: 'Yoshi Tannamuri', country: 'Canada' },
  { company: 'Magazzini Alimentari Riuniti', contact: 'Giovanni Rovelli', country: 'Italy' },
  { company: 'North/South', contact: 'Simon Crowther', country: 'UK' },
  { company: 'Paris spécialités', contact: 'Marie Bertrand', country: 'France' },
];

interface CompanyData {
  company: string;
  contact: string;
  country: string;
}