import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { addCircleOutline, personCircleOutline } from 'ionicons/icons'

import { FC } from 'react'
import NavBtn from '../components/NavBtn'
import { RouteComponentProps } from 'react-router-dom'

const Library: FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent fullscreen className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar className="mx-[-20px]">
            <NavBtn fill="clear" size="large" icon={personCircleOutline} route={`/${match.path.split("/")[1]}/me`} />
            <IonTitle className='ml-[-60px]'>Your Library</IonTitle>
            <NavBtn className='mr-[-25px]' slot="end" fill="clear" size="large" icon={addCircleOutline} route={`/${match.path.split("/")[1]}/scan`} />
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  )
}

export default Library;