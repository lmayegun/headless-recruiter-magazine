import _ from 'lodash';

class AppUtils{

  static setRoutes(config, defaultAuth)
  {
      let routes = [...config.routes];

      if ( config.settings || config.auth )
      {
          routes = routes.map((route) => {
              let auth = config.auth ? [...config.auth] : defaultAuth || null;
              auth = route.auth ? [...auth, ...route.auth] : auth;
              return {
                  ...route,
                  settings: {...config.settings, ...route.settings},
                  auth
              };
          });
      }

      return [...routes];
  }

  static generateRoutesFromConfigs(configs, defaultAuth){
    let allRoutes = [];
    configs.forEach((config) => {
        allRoutes = [
            ...allRoutes,
            ...this.setRoutes(config)
        ]
    });
    return allRoutes;
  }

  static getFlatNavigation(navigationItems, flatNavigation)
  {
      flatNavigation = flatNavigation ? flatNavigation : [];
      for ( const navItem of navigationItems )
      {
          if ( navItem.type === 'subheader' )
          {
              continue;
          }

          if ( navItem.type === 'item' )
          {
              flatNavigation.push({
                  id   : navItem.id,
                  title: navItem.title,
                  type : navItem.type,
                  icon : navItem.icon || false,
                  url  : navItem.url,
                  auth : navItem.auth || null
              });

              continue;
          }

          if ( navItem.type === 'collapse' || navItem.type === 'group' )
          {
              if ( navItem.children )
              {
                  this.getFlatNavigation(navItem.children, flatNavigation);
              }
          }
      }

      return flatNavigation;
  }

  static hasPermission(authArr, userRole)
  {
      /**
       * If auth array is not defined
       * Pass and allow
       */
      if ( authArr === null || authArr === undefined )
      {
          // console.info("auth is null || undefined:", authArr);
          return true;
      }
      /**
       * if auth array is empty means,
       * allow only user role is guest (null or empty[])
       */
      else if ( authArr.length === 0 )
      {
          // console.info("auth is empty[]:", authArr);
          return !userRole || userRole.length === 0;
      }
      /**
       * Check if user has grants
       */
      else
      {
          // console.info("auth arr:", authArr);
          /*
          Check if user role is array,
          */
          if ( userRole && Array.isArray(userRole) )
          {
              return authArr.some(r => userRole.indexOf(r) >= 0);
          }

          /*
          Check if user role is string,
          */
          return authArr.includes(userRole);
      }
  }

  static appendNavItemToParent(nav)
  {
    console.log(nav,"banter")
  }

  static appendNavItem(nav, item, parentId)
  {
      if ( !parentId )
      {
          return [
              ...nav,
              item
          ]
      }

      return nav.map(_item => {

          if ( _item.id === parentId && _item.children )
          {
              item.map((clock)=>{
                _item.children.push(clock)
              })
              return {
                  _item,
                  children: [
                      ..._item.children,
                      item
                  ]
              };
              return _item
          }

          if ( _item.children )
          {
              return _.merge({}, _item, {
                  children: this.appendNavItem(_item.children, item, parentId)
              });
          }
          else
          {
              return _.merge({}, _item);
          }
      })
  }
}

export default AppUtils;
