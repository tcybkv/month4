import React, { useEffect, useState } from 'react';

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    async function getUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    }

    async function getUserById(userId) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        setSelectedUser(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} <button onClick={() => getUserById(user.id)}>more</button></li>
                ))}
            </ul>

            {selectedUser && (
                <ul>
                    <li>Name: {selectedUser.name}</li>
                    <li>Username: {selectedUser.username}</li>
                    <li>Email: {selectedUser.email}</li>
                </ul>
            )}
        </>
    );
}

export default UsersPage;