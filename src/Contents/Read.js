import React, { useEffect, useState } from 'react';

const Read = () => {
    const [users, setUsers] = useState([{}]);

    useEffect(() => {
        // read data from server response
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    return (
        <div>
            <h1>Read Operation</h1>
            {
                users.map((user, index) => <p key={index}>{index}. {user._id}</p>)
            }
        </div>
    );
};

export default Read;