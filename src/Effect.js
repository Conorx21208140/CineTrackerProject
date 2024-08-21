import React, { useState, useEffect } from 'react';

function UsersList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Define the function that fetches data
        async function fetchUsers() {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();  // Parse JSON response into a native JavaScript object
                if (response.ok) {
                    setUsers(data);  // Update state with fetched users
                    console.log('Data fetched successfully', data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                setError(error.message);  // Update state with error message
                console.error('Failed to fetch data', error);
            }
        }

        // Call the function
        fetchUsers();
    }, []);  // Empty dependency array means this effect will only run once after the initial render

    return (
        <div>
            <h1>Users</h1>
            {error ? (
                <p>Error: {error}</p>  // Display error message if any
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name}</li>  // Render users fetched from the API
                    ))}
                </ul>
            )}
        </div>
    );
}

export default UsersList;
