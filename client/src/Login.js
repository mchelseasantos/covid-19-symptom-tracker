import React, {useState} from "react";
import { Button, Form } from 'semantic-ui-react';
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
                localStorage.setItem('user_id', data.id);
                history.push("/") 
            }
        });
    }

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Field className="usernameForm">
                <label className="username">Username</label>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' />
            </Form.Field>
            <Form.Field className="passwordForm">
                <label className="password">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default Login