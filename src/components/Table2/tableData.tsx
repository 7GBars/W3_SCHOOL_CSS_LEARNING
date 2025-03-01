import {IColumn} from "../../models-view/table";

export const columns: IColumn<CompanyData>[] = [
  {
    header: 'Company',
    dataField: 'company',
    width: '50px',
    cellRender: (value, rowData) => <div className={'name'}>
      <div className={'name__color'}></div>
      <div className={'name__text'}>
        {value}
      </div>
    </div>, // Жирный шрифт для названия компании
  },
  {
    header: 'Contact',
    dataField: 'contact',
    width: '100px',
    cellRender: (value, row) => (
      <span style={{ color: row.country === 'Germany' ? 'green' : 'inherit' }}>
          {value}
        </span>
    ), // Зеленый цвет для Germany
  },
  {
    header: 'Country',
    dataField: 'country',
    width: '100px',

  },
];

export const data: CompanyData[] = [
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