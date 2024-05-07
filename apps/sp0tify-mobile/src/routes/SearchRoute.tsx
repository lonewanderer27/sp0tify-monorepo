import React, { FC } from 'react'
import { Route, RouteComponentProps } from 'react-router'

import { IonRouterOutlet } from '@ionic/react'
import Me from '../pages/Me'
import Search from '../pages/Search'

const SearchRoute: FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet id="search">
      <Route path={match.url} component={Search} exact />
      <Route path={`${match.url}/me`} component={Me} exact />
    </IonRouterOutlet>
  )
}

export default SearchRoute;