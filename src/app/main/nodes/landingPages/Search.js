import React, {useEffect, useState} from 'react';
import {FusePageSimple, AppIconHeader, ThreeByTwoAd} from '@localpkg';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import SearchFilter from 'app/app-layouts/shared-components/search/SearchComponent';

const useStyles = makeStyles( theme => ({
    root:{
      paddingTop: '50px',
    },
    results:{

    },
    result:{
      paddingRight: '20px',
      marginBottom: '50px',
      width:'50%',
      float: 'left',
      boxSizing: 'border-box',
      [theme.breakpoints.down('sm')]:{
        width:'100%',
        paddingRight: '0px',
      }
    },
    innerDiv:{
      borderBottom: '1px solid #000',
      minHeight: '125px',
    },
    title:{
      fontSize: '20px',
    }
  })
);

function Search(){
  const classes = useStyles();
  const searchNode = useSelector(({search}) => (search.searchText.searchResultsState) );

  const [searchData, setSearchData] = useState(searchNode);

  useEffect(()=>{
    setSearchData(searchNode);
  }, [searchNode]);

  return(
    <div className={classes.root}>
      <FusePageSimple

        content={
          <div className={classes.results}>
            <div>
              <AppIconHeader title={"search page"} />
            </div>
            <div>
              <SearchFilter variant={'search-and-filter'} />
            </div>
            {( searchData !== undefined ) && (
              searchData.map((key, index) => {
                return(
                  <div className={clsx(classes.result, "float-left")}>
                    <div className={clsx(classes.innerDiv)}>
                      <h1 className={clsx(classes.title, " col")}> <Link to='/'> {key.title} </Link> </h1>
                      <div dangerouslySetInnerHTML={{__html:key.body.substring(0,50)}}/>
                    </div>
                  </div>
                )
              })
            )}

            {( !searchData ) && (
              <h1> No search result </h1>
            )}
          </div>
        }
        rightSidebarContent={
          <div>
            <ThreeByTwoAd />
            <ThreeByTwoAd imgPath={"https://assets.adnuntius.com/RcA0jk-UVSvFKKTLJNy90qU7L02OGmM1q5OR2v-USCg.png"}/>
            <ThreeByTwoAd imgPath={"https://www.recruiter.co.uk/sites/all/themes/recruiter/img/e-news-mpu.png"}/>
          </div>
        }
      />
    </div>
  )
}

export default Search;
