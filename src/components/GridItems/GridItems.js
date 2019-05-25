import * as React from 'react';
import { DATA } from '../../constants/DATA';

export const GridItems = () => (
  <React.Fragment>
    {
      DATA.map(item =>
        <div className="grid-item" key={item}>
          <img alt={item} src={item} />
        </div>
        )
    }
  </React.Fragment>
);

