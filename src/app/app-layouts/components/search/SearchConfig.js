import React from 'react';
// import {authRoles} from 'app/auth'

export const NodesConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            exact    : true,
            path     : '/',
            component: React.lazy(() => import('./front/HomePage'))
        },
        {
            exact    : true,
            path     : '/news',
            component: React.lazy(() => import('./News'))
        },
        {
            exact    : true,
            path     : '/news/:term/:id',
            component: React.lazy(() => import('./TermNews'))
        },
        {
            exact    : true,
            path     : '/knowledge',
            component: React.lazy(() => import('./Knowledge'))
        },
        {
            exact    : true,
            path     : '/knowledge/:term/:id',
            component: React.lazy(() => import('./TermKnowledge'))
        },
        {
            exact    : true,
            path     : '/magazine/:term/:id',
            component: React.lazy(() => import('./TermMagazine'))
        },
        {
            exact    : true,
            path     : '/events',
            component: React.lazy(() => import('./Events'))
        },
        {
            path     : '/article/:contenttype/:title/:id',
            component: React.lazy(() => import('./articlePage/NewsNode'))
        },
        {
            path     : '/search',
            component: React.lazy(() => import('./Search'))
        },
    ]
};
