import React from 'react';
import {AppUtils} from '@localpkg';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {NodesConfig} from 'app/main/nodes/NodesConfig';

const Home = () => {
  return(
    <div>
      <h2>Home hsghghsghv ;salk kasjj k</h2>
    </div>
  );
}

const routesComponentsConfig = [
  ExampleConfig,
  NodesConfig,
  {
    settings: {
        layout: {
            config: {}
        }
    },
    routes:[
      {
        path: "/",
        exact: true,
        component: Home
      }
    ]
  }
]

const routes =  [
      ...AppUtils.generateRoutesFromConfigs(routesComponentsConfig),
    ];

export default routes;
