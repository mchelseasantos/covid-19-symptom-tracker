import React, {useEffect, useState} from "react";
import { Button, List, Card, Form } from 'semantic-ui-react'

function Home({ handleAddNote }){
const [symptomTypes, setSymptomTypes] = useState([])
const [symptoms, setSymptoms] = useState([])
const [chosenSymptoms, setChosenSymptoms] = useState([])
const [notes, setNotes] = useState('')
const [date, setDate] = useState('')
const [bloodPressure,setBloodPressure] = useState('')
const [temperature, setTemperature] = useState('')
const [heartRate, setHeartRate] = useState('')

    useEffect(() => { 
        fetch("/symptom_types", { 
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(data => {
            if (!data.error) { 
              setSymptomTypes(data)
            }
        });
    },[]);

    function onFormSubmit(e){
        e.preventDefault()
        const vitalSigns = {
            user_id: localStorage.getItem('user_id'),
            date: date, 
            temperature: temperature, 
            blood_pressure: bloodPressure, 
            heart_rate: heartRate,
            notes: notes,
            // day_symptoms_attributes: {

            // }
        }
        fetch('/days',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'},
            body: JSON.stringify(vitalSigns)
        })
            .then(response => response.json())
            .then(data => console.log(data));
    };

    function renderSymptomTypes(){
        return symptomTypes.map((symptomType) => {
            return(
            <>
            <Card className="cardContainer">
            <List key={symptomType.description} className="symptomTypes">{symptomType.description}</List>
            {renderSymptoms(symptomType.symptoms)}
            </Card>
            </>
            )
        })
    }

    function renderSymptoms(symptoms){
        return symptoms.map((symptom) => {
            return(
                <>
                <List.Item>
                    <List.Content floated='right'>
                        <Button id={symptom.id} onClick={(e) => onAddClick(e, symptom.description)}>Add</Button>
                    </List.Content>
                <List key={symptom.description}>{symptom.description}</List>
                </List.Item>
                </>
            )
        })

    }

    function renderChosenSymptoms(){
        return chosenSymptoms.map((symptom) => {
            return(
                <List.Item>
                    <List.Content floated='right'>
                        <List>{symptom.description}</List>
                    </List.Content>
                </List.Item>
            )
        })
    }

    function onAddClick(e, description){
        fetch('/symptoms',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'},
            body: JSON.stringify({
                "symptom_type_id": e.target.id,
                "description": "",
            })
        })
            .then(response => response.json())
            .then(data => console.log(data));
        
        const filteredSymptoms =
        symptoms.filter(symptom => symptom.id !== e.target.id);
            setSymptoms(filteredSymptoms);
            setChosenSymptoms(chosen => 
                [...chosen, description]);
    };

    function onRemoveClick(e){
        const filteredSymptoms = chosenSymptoms.filter(symptom => symptom !== e.target.id);
        setChosenSymptoms(filteredSymptoms);
        setSymptoms(symptoms => [...symptoms, e.target.id]);
    };

    function handleChange(e){
        e.preventDefault();
        setNotes(e.target.value);
    };

    function handleSaveClick(e){
        handleAddNote(notes)
    };

    return (
    <>
    <List 
        divided verticalAlign='middle'>
        {renderSymptomTypes()}
    </List>
    
    <Form>
        {chosenSymptoms.map(symptom => (
        <>
        <p>{symptom}</p>
        <Button id={symptom} onClick={onRemoveClick}>Remove</Button>
        </>
        ))}
   </Form> 
    
    <Form>
        {renderChosenSymptoms()}
    </Form>

    <Form onSubmit={onFormSubmit}>
        <h1>Vital Signs</h1>
        <input 
        placeholder="date" 
        type="date"
        value={date} 
        onChange={e => setDate(e.target.value)}
        />
        <input 
        placeholder="blood pressure" 
        value={bloodPressure} 
        onChange={e => setBloodPressure(e.target.value)}
        />
        <input 
        placeholder="temperature" 
        value={temperature} 
        onChange={e => setTemperature(e.target.value)}
        />
        <input 
        placeholder="heart rate" 
        value={heartRate} 
        onChange={e => setHeartRate(e.target.value)}
        />

        <textarea 
            className="notes"
            placeholder='Notes'
            value={notes}
            onChange={handleSaveClick}
        ></textarea>
        <Button type='submit'>Submit</Button>
    </Form>
    </>
    )

}

export default Home;