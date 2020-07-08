import React, {useState} from 'react';
import {Paper, Drawer, Hidden, Menu, MenuItem, Slide, Typography, Icon} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/styles';
import {useDispatch, useSelector} from 'react-redux';
import Logo from './Logo';
import {AppIcon} from '@localpkg';
import clsx from 'clsx';

const NavMobile = ()=> {
  const style = makeStyles(theme => ({
    root:{
      backgroundColor: theme.palette.primary.dark,
      boxShadow: 'none',
    },
    navbar:{
      position: 'fixed',
      background: theme.palette.primary.dark,
      zIndex: 5,
      width: '100%',
      padding: '20px 0px'
    },
    actionsWrapper:{
      display: 'flex',
      flexDirection: 'row',
      '& .brand':{
        flexGrow: 1,
      },
      '& .burgerMenuIcon':{
        cursor: 'pointer',
        fontSize: '2.5rem',
        padding: '5px 10px',
      },
    },
    menuList:{
      '& .buttonsNavWrapper':{
        borderTop: '1px solid',
      }
    },
    menuList :{
      width: '100%',
      position: 'fixed',
      left: '0px',
      top:'80px',
      background: theme.palette.primary.dark,
      flexDirection: 'column',
      '& .buttonsNavWrapper':{
        borderTop: '1px solid',
      }
    },
  }));

  const classes = style()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Hidden lgUp>
      <Paper className={classes.navbar} square={true}>
          <div className={classes.actionsWrapper}>

            <div className={"brand"}>
              <Logo brandDescription={false}/>
            </div>

            <Icon className={"burgerMenuIcon"} style={{width:'35px'}} onClick={handleClick}>menu</Icon>

            <Menu className="veteran"
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Slide}

              classes={{
                paper: classes.root,
                list: classes.root,
              }}
              children={
                <div className={classes.menuList}  >
                  <div style={{borderBottom: '1px solid', width:'100%'}}>
                    <div className="flex p-16 float-right w-full">
                      search area
                    </div>
                  </div>
                  <div>
                    <MenuItem onClick={handleClose}><Typography variant="h3">News</Typography></MenuItem>
                    <MenuItem onClick={handleClose}><Typography variant="h3">Knowledge</Typography></MenuItem>
                    <MenuItem onClick={handleClose}><Typography variant="h3">Jobs</Typography></MenuItem>
                    <MenuItem onClick={handleClose}><Typography variant="h3">Events</Typography></MenuItem>
                    <MenuItem onClick={handleClose}><Typography variant="h3">Directory</Typography></MenuItem>
                    <MenuItem onClick={handleClose}><Typography variant="h3">Rec</Typography></MenuItem>
                  </div>
                  <div className={"buttonsNavWrapper"}>
                    <div className="buttons">
                      <AppIcon iconPos={'0 -5708px'}/>
                      <AppIcon iconPos={'0 -5756px'}/>
                      <AppIcon iconPos={'0 -5804px'}/>
                      <AppIcon iconPos={'0 -5899px'}/>
                      <AppIcon iconPos={'0 -5946px'}/>
                    </div>
                  </div>
                </div>
            }
            >
            </Menu>
          </div>
      </Paper>
    </Hidden>
  )
}

export default NavMobile;
