import React, { useEffect, useState } from 'react';
import axios from 'axios'
export default function UserList(){
    const [users, setUsers] = useState[{}];
    useEffect(()=>{
        axios.get('./api/users')
        .then(response => setUsers(response.data))
    })

    return(

        <div>
            <h1>User Lists</h1>
            <ul>
                {users.map(user =>{
                    <li key={user._id}> {user.email} {user.name}</li>

                } )}
            </ul>
        </div>
    )
}

