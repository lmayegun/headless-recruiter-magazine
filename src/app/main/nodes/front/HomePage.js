import React from 'react';

import {AppPageSimple, LeaderBoardAd} from '@localpkg';
import {SectionOne,
        SectionThree,
        SectionFour,
        SectionFive,
        SectionSix,
        SectionEight,
        SectionTen,
        SectionTwelve
        } from './sections';

const HomePage = () => {

  return(
    <div>
      <AppPageSimple
        content={
          <div>
            <SectionOne />
            <LeaderBoardAd />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionEight />
            <SectionTen />
            <SectionTwelve />
          </div>
        }
      />
    </div>
  )
}

export default HomePage;
