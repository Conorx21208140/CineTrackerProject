import React, { useState } from 'react';

function Register() {
    // State hooks to store the values of username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle the form submission
    const handleRegister = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const apiUrl = process.env.REACT_APP_API_BASE_URL; // Get the API URL from environment variables

        // Perform the POST request
        try {
            const response = await fetch(`${apiUrl}/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            // Check if the response was successful
            if (response.ok) {
                console.log('Registration successful');
                // Optional: Redirect or clear form
            } else {
                console.log('Registration failed');
                // Optional: Handle errors or unsuccessful registration
            }
        } catch (error) {
            console.error('Failed to register due to an error:', error);
            // Optional: Handle network errors or other unexpected errors
        }
    };

    // Render the form
    return (
        <form onSubmit={handleRegister}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
}

export default Register;
