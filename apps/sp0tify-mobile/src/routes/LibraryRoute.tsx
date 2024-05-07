import React, { FC } from 'react'
import { Route, RouteComponentProps } from 'react-router'

import { IonRouterOutlet } from '@ionic/react'
import Library from '../pages/Library'
import Me from '../pages/Me'

const LibraryRoute: FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet id="library">
      <Route path={match.url} component={Library} exact />
      <Route path={`${match.url}/me`} component={Me} exact />
    </IonRouterOutlet>
  )
}

export default LibraryRoute;
