import {AppUtils} from '@localpkg';
import {NodesConfig} from 'app/main/nodes/NodesConfig';

const routesComponentsConfig = [
  NodesConfig,
]

const routes =  [
      ...AppUtils.generateRoutesFromConfigs(routesComponentsConfig),
    ];

export default routes;
