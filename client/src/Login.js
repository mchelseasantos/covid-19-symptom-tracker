import React, {useState} from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react';
import {useHistory} from "react-router-dom";

function Login({path}){
const history = useHistory()
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
    
    function handleSubmit(e){ 
        e.preventDefault()
        fetch(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        })
        .then(response => response.json())
        .then(data => {
            if (!data.error) {
                history.push("/") 
            }
        });
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default Login