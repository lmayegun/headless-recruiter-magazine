import React from 'react';
import {AppUtils} from '@localpkg';
import {ExampleConfig} from 'app/main/example/ExampleConfig';

const Home = () => {
  return(
    <div>
      <h2>Home hsghghsghv ;salk kasjj k</h2>
    </div>
  );
}

const routesComponentsConfig = [
  ExampleConfig,
  {
    settings: {
        layout: {
            config: {}
        }
    },
    routes:[
      {
        path: "/homes",
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
