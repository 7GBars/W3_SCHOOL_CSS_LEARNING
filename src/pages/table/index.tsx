import React, {FC} from 'react'
import {TableComponent} from "../../components";
import {testColumns, testData} from "../../__mocks__";

type TTablePageProps = {};

export const TablePage: FC<TTablePageProps> = ({}) => {
  return (
    <div className={'page_container'}>
      <TableComponent
        data={[]}
        columns={[]}
        rowConfig={{height: 20, alignment: 'left', verticalAlign: 'top'}}
        width={200}
      />
    </div>
  );
}