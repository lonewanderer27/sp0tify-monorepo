import React, { FC } from 'react'
import { Route, RouteComponentProps } from 'react-router'

import { IonRouterOutlet } from '@ionic/react'
import Library from '../pages/Library'

const LibraryRoute: FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonRouterOutlet id="library">
      <Route path={match.url} component={Library} exact />
    </IonRouterOutlet>
  )
}

export default LibraryRoute;
