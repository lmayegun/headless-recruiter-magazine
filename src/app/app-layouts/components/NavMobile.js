import React, {useState} from 'react';
import {Paper, Hidden, Menu, MenuItem, Slide, Typography, Icon} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Logo from './Logo';
import {AppIcon} from '@localpkg';

const NavMobile = ()=> {
  const style = makeStyles(theme => ({
    root:{
      backgroundColor: theme.palette.primary.dark,
      boxShadow: 'none',
    },
    navbar:{
      position: 'fixed',
      background: theme.palette.primary.dark,
      top:0,
      zIndex: 5,
      width: '100%',
      paddingBottom: '10px',
      paddingTop: '20px'
    },
    actionsWrapper:{
      display: 'flex',
      flexDirection: 'row',
      '& .brand':{
        flexGrow: 1,
        paddingLeft: 20
      },
      '& .burgerMenuIcon':{
        cursor: 'pointer',
        fontSize: '2.5rem',
        padding: '5px 20px',
      },
    },
    menuList :{
      width: '100%',
      position: 'fixed',
      left: '0px',
      top:'80px',
      background: theme.palette.primary.dark,
      flexDirection: 'column',
      '& .searchWrapper':{
        paddingLeft: 10,
      },
      '& .navMainWrapper':{
        paddingLeft: 10,
      },
      '& .buttonsNavWrapper':{
        borderTop: '1px solid',
        '& .buttons':{
          display: 'flex',
          flexDirection: 'row',
          padding: '20px'
        }
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
                    <div className={"searchWrapper"}>
                      search area
                    </div>
                  </div>
                  <div className={"navMainWrapper"}>
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
