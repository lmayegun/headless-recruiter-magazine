import React from 'react';

import {AppPageSimple, LeaderBoardAd} from '@localpkg';
import {SectionOne,
        SectionTwo,
        SectionThree,
        SectionFour,
        SectionFive,
        SectionSix,
        SectionSeven,
        SectionEight,
        SectionTen,
        SectionEleven,
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
            <SectionEleven />
            <SectionTwelve />

          </div>
        }
      />
    </div>
  )
}

export default HomePage;
