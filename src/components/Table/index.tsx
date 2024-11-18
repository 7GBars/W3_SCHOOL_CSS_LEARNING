import React, {FC} from 'react';

import './index.scss';

type TTableProps = {}
export const Table: FC<TTableProps> = ({}) => {
  return (
    <table className={'my_table'}>
      <tr>
        <th>Name</th>
        <th>ManOrWomen</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>man</td>
        <td>20</td>
      </tr>
      <tr>
        <td>Nancy</td>
        <td>women</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Ash</td>
        <td>man</td>
        <td>25</td>
      </tr>
    </table>
  );
}