import React from 'react';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

const SectionEleven = ()=> {

  const style = makeStyles( theme => ({
      container: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 50,
        padding: 0,
        [theme.breakpoints.up('lg')]:{
          flexDirection: 'row',
        }
      },
      sectionCol: {
        minHeight: 100,
        width: '100%',
        '&.first-col':{
          [theme.breakpoints.up('lg')]:{
          }
        },
        [theme.breakpoints.up('md')]: {

        },
        [theme.breakpoints.up('lg')]: {
          padding: '20px 20px 20px 20px',
        }
      },
      panel:{
        [theme.breakpoints.up('lg')]: {
          background: '#efece6',
          padding: '10px 20px 20px 20px',
        }
      },
      imagesContainer:{
        display: 'flex',
        '& .image':{
          padding: '20px 40px',
          width: '35%',
        },
      }
    })
  )

  const classes = style();

  return(
      <div className={clsx(classes.container)}>
        <div className={clsx(classes.sectionCol, "first-col")}>
          <div className={clsx(classes.panel)}>
            <h2> FEATURED SUPPLIERS</h2>
            <div className={clsx(classes.imagesContainer)}>
              <div className="image">
                  <img
                      src="https://www.recruiter.co.uk/sites/default/files/styles/featured_logo/public/media/image/2017/recruiter_jobs_logo_copy.png?itok=mg8jKNM6"
                      alt="Recruiter Jobs logo"/>
              </div>
              <div className="image">
                  <img
                      src="https://www.recruiter.co.uk/sites/default/files/styles/featured_logo/public/media/image/2017/choice_305px_130px_png.png?itok=TmoP_-Se"
                      alt="Recruiter Jobs logo"/>
              </div>
              <div className="image">
                  <img
                      src="https://www.recruiter.co.uk/sites/default/files/styles/featured_logo/public/media/image/2019/cic_logo_rgb.jpg?itok=ehfXMOsW"
                      alt="Recruiter Jobs logo"/>
              </div>
              <div className="image">
                  <img
                      src="https://www.recruiter.co.uk/sites/default/files/styles/featured_logo/public/media/image/2017/zeel_logo_green_rgb_new.jpg?itok=3mOgqrFW"
                      alt="Recruiter Jobs logo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SectionEleven; 
