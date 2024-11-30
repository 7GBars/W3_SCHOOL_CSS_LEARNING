import React, {FC, memo} from 'react';

// Определяем компонент с дженериком T
type TRsfgProps<T> = React.PropsWithChildren<{ data: T }>
export const Rsfg = memo(<T, >(props: TRsfgProps<T>) => {
  return (
    <div>
      
    </div>
  );
});