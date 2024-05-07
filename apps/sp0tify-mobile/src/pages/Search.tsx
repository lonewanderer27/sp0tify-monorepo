import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react'
import { cameraOutline, personCircleOutline } from 'ionicons/icons'

import { FC } from 'react'
import NavBtn from '../components/NavBtn'
import { RouteComponentProps } from 'react-router'

const Search: FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent fullscreen className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar className="mx-[-20px]">
            <NavBtn fill="clear" size="large" icon={personCircleOutline} route={`/${match.path.split("/")[1]}/me`} />
            <IonTitle className='ml-[-80px]' >Search</IonTitle>
            <NavBtn className='mr-[-25px]' slot="end" fill="clear" size="large" icon={cameraOutline} route={`/${match.path.split("/")[1]}/scan`} />
          </IonToolbar>
          <IonToolbar>
            <IonSearchbar placeholder='What do you want to listen to?'/>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  )
}

export default Search;
