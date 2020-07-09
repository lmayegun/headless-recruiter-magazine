import React from 'react';
import {Paper, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

import {AppSelect} from '@localpkg';


const SearchFilter = ()=>{
  const classes = useStyles();
  return(
    <Paper className={classes.root}>
      <form className={classes.formWrapper} onSubmit={()=>{alert("fsfsf")}}>
        <div className={classes.searchTermWrapper}>
          Search Terms
          <TextField
            id="standard-basic"
            style={{
              marginTop:'16px',
              width: '100%'
            }}
          />
        </div>
        <div className={classes.sortByWrapper}>
          Sort By
          <AppSelect
            name={"category"}
            options={[{postDate:'Post Date'}, {title:'Title'}]}
            className={"selector"}
          />
        </div>
        <div className={classes.orderByWrapper}>
          Order
          <AppSelect
            name={"category"}
            options={[{desc:'Descending'}, {asc:'Ascending'}]}
            className={"selector"}
          />
        </div>
        <div className={classes.submitWrapper}>
          <Button
            variant="contained"
            style={{
              width:'100%',
            }}
          >Search</Button>
        </div>
      </form>
    </Paper>
  );
};

const useStyles = makeStyles( theme => ({
    root:{
      marginBottom: '25px',
    },
    formWrapper:{
      padding:20,
      background: theme.palette.secondary[50],
      display: 'flex',
      [theme.breakpoints.down('md')]:{
        flexDirection: 'column',
        '& div':{
          marginBottom: 10
        }
      },
    },
    searchTermWrapper:{
      flex: 1,
      paddingRight: 20,
    },
    sortByWrapper:{
      flex: 1,
      paddingRight: 20,
    },
    orderByWrapper:{
      flex:1,
      paddingRight: 20,
    },
    submitWrapper:{
      flex:1,
      alignSelf:'flex-end'
    }
  })
);


export default SearchFilter;
