import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {FuseScrollbars} from '@localpkg';
import clsx from 'clsx';
import {useSelector} from 'react-redux';

function FusePageSimpleSidebarContent(props)
{

    const classes = props.classes;

    return (
        <FuseScrollbars enable={props.innerScroll}>
            {props.header && (
                <ThemeProvider>
                    <div className={clsx(classes.sidebarHeader, props.variant, props.sidebarInner && classes.sidebarHeaderInnerSidebar)}>
                        {props.header}
                    </div>
                </ThemeProvider>
            )}

            {props.content && (
                <div className={classes.sidebarContent}>
                    {props.content}
                </div>
            )}
        </FuseScrollbars>
    );
}

export default FusePageSimpleSidebarContent;
