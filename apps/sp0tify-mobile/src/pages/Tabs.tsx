import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { bookSharp, searchOutline } from 'ionicons/icons';

import { FC } from 'react';
import Library from './Library';
import Login from './Login';
import SearchRoute from '../routes/SearchRoute';

const Tabs: FC<RouteComponentProps> = ({ match }) => {
  console.log(match);

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/search" component={SearchRoute} />
        <Route path="/library" render={() => <Library />} exact={true} />
        <Route path="/login" render={() => <Login />} exact={true} />
        <Route path="" render={() => <Redirect to="/search" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="search" href="/search">
          <IonIcon icon={searchOutline} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="library" href="/library">
          <IonIcon icon={bookSharp}>
          </IonIcon>
          <IonLabel>Library</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
