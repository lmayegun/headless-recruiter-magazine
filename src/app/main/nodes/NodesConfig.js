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
            path     : '/knowledge',
            component: React.lazy(() => import('./landingPages/knowledge/Knowledge'))
        },
        {
            exact    : true,
            path     : '/events',
            component: React.lazy(() => import('./landingPages/events/Events'))
        },
        {
            exact    : true,
            path     : '/rec',
            component: React.lazy(() => import('./landingPages/rec/Rec'))
        },
        {
            path     : '/:term/:tag',
            component: React.lazy(() => import('./landingPages/tag/Tag'))
        },
        {
            path     : '/search',
            component: React.lazy(() => import('./landingPages/Search'))
        },
    ]
};
