import React, { useState } from 'react';

    export default function SignUpForm({ setToken }) {
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const [error, setError] = useState(null);



     const handleSubmit = (event) => {
            event.preventDefault();
            try {
           
                const getData = async () => {
                const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })

                const result = await response.json()
                console.log(result)
                const token = result.token
                setToken(token)
            }
            getData()
            } 
            catch (error) {
                setError(error.message);
            }
            }
        return (
            <div>
        <h2 style={{color: "purple"}}>Sign Up!</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label style={{
                display: "flex", 
                justifyContent: "center",
                marginBottom: "20px"
                }}>
                Username:{" "} <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label style={{
                display: "flex", 
                justifyContent: "center",
                marginBottom: "20px"
                }}>
                Password (must contain at least 8 characters):{" "} <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    
            </label>
            <button style={{padding: "10px"}}>Submit</button>
        </form>
        </div>
        );
    }