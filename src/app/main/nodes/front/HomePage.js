import React from 'react';

import {AppPageSimple} from '@localpkg';
import {SectionOne} from './sections';

const HomePage = () => {

  return(
    <div>
      <AppPageSimple
        content={
          <div>
            <SectionOne />
          </div>
        }
      />
    </div>
  )
}

export default HomePage;
