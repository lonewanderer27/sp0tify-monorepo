import { ComponentProps, useMemo } from "react"
import { IonAvatar, IonButton, IonIcon, useIonRouter } from '@ionic/react'

import { peopleCircleOutline } from "ionicons/icons";

type BtnProps = ComponentProps<typeof IonButton> & {
  route: string;
  icon?: string;
  ionIconProps?: ComponentProps<typeof IonIcon>;
  avatarUrl?: string;
};

export default function NavBtn(props: BtnProps) {
  const hst = useIonRouter()
  const isValidUrl = useMemo(() => {
    try {
      new URL(props.avatarUrl + "");
      return true;
    } catch (_) {
      return false;
    }
  }, [props.avatarUrl]);


  const handleClick = () => {
    hst.push(props.route)
  }

  return (
    <IonButton onClick={handleClick}  className="ml-4" {...props} size={props.size}>
      {props.avatarUrl && isValidUrl ? (
        <IonAvatar>
          <img src={props.avatarUrl} />
        </IonAvatar>
      ) : (
        <IonIcon
          {...props.ionIconProps}
          icon={props.icon}
        />
      )}
    </IonButton>
  )
}

NavBtn.defaultProps = {
  size: "default",
  icon: peopleCircleOutline, 
}