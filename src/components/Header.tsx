import { IonHeader, IonTitle, IonToolbar } from "@ionic/react"
import React from "react"

const Header: React.FC = () =>{
    return(
    <>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Слободяник Єгор Сергійович КН-32</IonTitle>
            </IonToolbar>
        </IonHeader>
    </>)
}  

export default Header;