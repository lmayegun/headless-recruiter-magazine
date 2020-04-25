import React, {useEffect, useState} from 'react';
import {FusePageSimple, AppIconHeader, ThreeByTwoAd, AppLatestJobs} from '@localpkg';
import {useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles( theme => ({
    result:{
      paddingRight: '20px',
      marginBottom: '50px',
    },
    innerDiv:{
      borderBottom: '1px solid #000',
      minHeight: '155px',
    },
    title:{
      fontSize: '20px',
      minHeight: '65px',
    }
  })
);

function TitleSummary( props ){

  const classes = useStyles();

  return(
    <div className={clsx(classes.result, "lg:w-1/2 float-left")}>
      <div className={clsx(classes.innerDiv)}>
        <h1 className={clsx(classes.title, " col")}> <Link to='/'> {props.content.title} </Link> </h1>
        <span> {props.content.body} </span>
      </div>
    </div>
  )
}

TitleSummary.defaultProps = {
  content: "way too young to be getting old"
}

function Search(){

  const searchNode = useSelector(({search}) => (search.searchText.searchResultsState) );

  const [searchData, setSearchData] = useState(searchNode);

  useEffect(()=>{
    setSearchData(searchNode);
  }, [searchNode]);

  if( !searchData ){
    return null;
  }

  return(
    <div>
      <FusePageSimple
        featuredContents={
          <div>
            <AppIconHeader title={"search"} />
          </div>
        }
        content={
          <div>
            {
              searchData.map((key, index) => {
                return(
                  <React.Fragment>
                    <TitleSummary content={key} />
                  </React.Fragment>
                )
              })
            }
          </div>
        }
      />
    </div>
  )
}

export default Search;
