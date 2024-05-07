import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

import { FC } from 'react'
import { RouteComponentProps } from 'react-router'

const Me: FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader translucent>
          <IonToolbar>
            <IonTitle>
              Me
            </IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size="large">
              Me
            </IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  )
}

export default Me;
