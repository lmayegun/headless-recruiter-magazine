import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {TextField, Button} from '@material-ui/core';
import {useForm} from '@localpkg/hooks';
import clsx from 'clsx';

const useStyles = makeStyles( theme => ({
   container: {
     display: 'flex',
     flexDirection: 'column',
     marginBottom: 50,
     padding: 20,
     [theme.breakpoints.up('lg')]:{
       flexDirection: 'row',
     }
   },
   sectionNineCol: {
     background: '#c1b49a',
     minHeight: 300,
     width: '100%',
     '&.first-col':{
       [theme.breakpoints.up('lg')]:{

       }
     },
     [theme.breakpoints.up('md')]: {
       background: 'yellow'
     },
     [theme.breakpoints.up('lg')]: {
       background: '#c1b49a',
     }
   },
 })
);

export function SectionNine( props ){
  const classes = useStyles();
  const {form, handleChange, setForm} = useForm(null);

  useEffect(()=>{
    if( !form ){
      setForm({description:"we know how to party"});
    }
  },[props, setForm, form])

  return(
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.sectionNineCol, "first-col")}>
          Former
          {form &&
            (
              <TextField
                className="mt-8 mb-16"
                required
                label="Name"
                autoFocus
                id="name"
                name="description"
                onChange={handleChange}
                value={form.description}
                variant="outlined"
                fullWidth
                />
              )
          }

          <Button
              className="whitespace-no-wrap"
              variant="contained"
              onClick={() => {
              console.log(form, 'lost and found')
              }}
          >
            Save
          </Button>

        </div>
      </div>
  )
}
