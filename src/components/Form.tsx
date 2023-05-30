import React from 'react';
import { IonInput, IonButton, IonLabel, IonItem, IonText } from '@ionic/react';
import { useForm } from 'react-hook-form';

interface ReactiveFormProps {
    onSubmit: (data: any) => void;
}

const Form: React.FC<ReactiveFormProps> = ({ onSubmit }) => {
const { register, handleSubmit, formState: { errors }} = useForm();

const handleFormSubmit = (data: any) => {
    onSubmit(data); 
};

return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <IonItem>
        <IonLabel  position="floating">
        Surname
        </IonLabel>
        <IonInput {...register('surname', { required: true })} placeholder="Surname" />
        {errors.surname && <IonText color="danger">Surname is required</IonText>}
    </IonItem>
    <IonItem>
        <IonLabel  position="floating">
            Experience 
        </IonLabel>
        <IonInput {...register('experience', { required: true, min: 1 })} placeholder="Experience" type='number'/>
        {errors.experience?.type === 'required' && <IonText color="danger">Experience is required</IonText>}
        {errors.experience?.type === 'min' && <IonText color="danger">Experience must be greater than 0</IonText>}
    </IonItem>
    <IonItem>
        <IonLabel  position="floating">
            Hourly Wage  
        </IonLabel>
        <IonInput {...register('hourlyWage', { required: true, min: 1 })} placeholder="Hourly Wage" type='number'/>
        {errors.hourlyWage?.type === 'required' && <IonText color="danger">Hourly Wage is required</IonText>}
        {errors.hourlyWage?.type === 'min' && <IonText color="danger">Hourly Wage must be greater than 0</IonText>}
    </IonItem>
    <IonItem>
        <IonLabel  position="floating">
            Hours Worked 
        </IonLabel>
        <IonInput {...register('hoursWorked', { required: true, min: 1 })} placeholder="Hours Worked" type='number' />
        {errors.hoursWorked?.type === 'required' && <IonText color="danger">Hours Worked is required</IonText>}
        {errors.hoursWorked?.type === 'min' && <IonText color="danger">Hours Worked must be greater than 0</IonText>}
    </IonItem>
    <IonItem>
        <IonLabel  position="floating">
            Number of Employees 
        </IonLabel>
        <IonInput {...register('employeeNumber', { required: true, min: 1 })} placeholder="Number of Employees" type='number' />
        {errors.employeeNumber?.type === 'required' && <IonText color="danger">Number of Employees is required</IonText>}
        {errors.employeeNumber?.type === 'min' && <IonText color="danger">Number of Employees must be greater than 0</IonText>}
    </IonItem>
    <IonButton type="submit">Submit</IonButton>
    </form>
);
};

export default Form;
