import React from 'react';
import {Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const SearchFilter = ()=>{
  const classes = useStyles();
  return(
    <Paper className={classes.root}>
      <div>
        Search Terms
      </div>
      <div>
        Sort By
      </div>
      <div>
        Order
      </div>
      <div>
        Submit
      </div>
    </Paper>
  );
};

const useStyles = makeStyles( theme => ({
    root:{
      padding:20,
      background: theme.palette.secondary[50],
      display: 'flex',
      [theme.breakpoints.down('md')]:{
        flexDirection: 'column',
      },
    }
  })
);


export default SearchFilter;
