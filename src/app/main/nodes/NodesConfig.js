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
            component: React.lazy(() => import('./landingPages/news/News'))
        },
        {
            exact    : true,
            path     : '/news/:term/:id',
            component: React.lazy(() => import('./landingPages/news/TermNews'))
        },
        {
            exact    : true,
            path     : '/knowledge',
            component: React.lazy(() => import('./landingPages/knowledge/Knowledge'))
        },
        {
            exact    : true,
            path     : '/knowledge/:term/:id',
            component: React.lazy(() => import('./landingPages/knowledge/TermKnowledge'))
        },
        {
            exact    : true,
            path     : '/magazine/:term/:id',
            component: React.lazy(() => import('./landingPages/magazine/TermMagazine'))
        },
        {
            exact    : true,
            path     : '/events',
            component: React.lazy(() => import('./landingPages/events/Events'))
        },
        {
            path     : '/article/:contenttype/:title/:id',
            component: React.lazy(() => import('./landingPages/news/NewsNode'))
        },
        {
            path     : '/search',
            component: React.lazy(() => import('./landingPages/Search'))
        },
    ]
};
