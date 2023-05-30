import { IonCard, IonCardContent, IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Header from '../components/Header';
import Form from '../components/Form';
import { Employee } from '../classes/Employee';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {

  const generateArr = (data:any):Employee[] => {
    const resArr: Employee[] = []
    const testEmp = new Employee(data.surname, data.experience, data.hourlyWage, data.hoursWorked);
    for (let index = 0; index < data.employeeNumber; index++) {
      resArr.push(testEmp);
    }
    return resArr;
  }
  const [employesArr, setEmployesArr] = useState<Employee[]>();
  const handleFormData = (data: any) => {
  setEmployesArr(generateArr(data));
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardContent>
            <IonItem>
              <Form onSubmit={handleFormData}/>
            </IonItem>
            <IonItem>
              <IonList>
                {employesArr?.map((emp, index) => (
                  <IonItem key={index}>{emp.getEmployeeData()}</IonItem>
                ))}
              </IonList>
            </IonItem>
          </IonCardContent>
        </IonCard>    
      </IonContent>
    </IonPage>
  );
};

export default Home;
