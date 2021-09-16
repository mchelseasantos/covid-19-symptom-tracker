import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom"; 
import { Button, Image, List } from 'semantic-ui-react'

function Home(){
const history = useHistory()
const [date, setDate] = useState("")
const [temperature, setTemperature] = useState("")
const [blood_pressure, setBlood_pressure] = useState("")
const [heart_rate, setHeart_rate] = useState("")

    useEffect(() => { //useEffect with empty dependency array 
        
        fetch("http://localhost:3001/home", { //fetch request to hit index method action of Day controller
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify({date, temperature, blood_pressure, heart_rate}),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if (!data.error) { //call setUser function and pass in data
                history.push("/") 
            }
        });

      },[]);

      return (
        <List divided verticalAlign='middle'>

    <List>Respiratory Symptoms</List>
        <br></br>
          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Cough</List.Content>
          </List.Item>
       
          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Congestion</List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Sore Throat</List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Shortness of Breath</List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Chest Discomfort</List.Content>
          </List.Item>

    <List>Sensory Symptoms</List>
        <br></br>
          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Lack of Smell</List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Lack of Taste</List.Content>
          </List.Item>

    <List>Full Body Symptoms</List>
        <br></br>
          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Fatigue</List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Body Aches</List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Chills</List.Content>
          </List.Item>

    <List>Neuro Symptoms</List>
        <br></br>
          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Headaches</List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Confusion</List.Content>
          </List.Item> 

          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Headaches</List.Content>
          </List.Item> 

    <List>Gastrointestinal Symptoms</List>
        <br></br>
          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Nausea</List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Vomiting</List.Content>
          </List.Item>

          <List.Item>
            <List.Content floated='right'>
              <Button>Add</Button>
            </List.Content>
            <List.Content>Diarrhea</List.Content>
          </List.Item>
        </List>
      )
}

export default Home;