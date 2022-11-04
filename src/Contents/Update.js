import React, { useState } from 'react';

const Update = () => {
    const [updatePermission, setupdatePermission] = useState(false);
    const [user, setUser] = useState({});

    const handleUpdate = (event) => {
        setUser({});
        event.preventDefault();
        const UpdateId = event.target.id.value;
        const agree = window.confirm(`Do you sure, you want to Update: ${UpdateId}`);
        if (agree) {
            fetch(`http://localhost:5000/users/${UpdateId}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setUser(data);
                    console.log('user:', user)
                });
        }
        setupdatePermission(agree);
    }

    const handleUpdateUser = (event) => {

        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(user._id)
        const updateUser = { name, email };
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        }
        )
            .then(res => res.json())
            .then(data => console.log(data));
        setupdatePermission(false);
    }
    return (
        <div>
            <h1>Update Operation</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name="id" placeholder='update id' />
                <br />
                <input type="submit" />
            </form>

            {
                updatePermission ?
                    <>
                        <h3>Update information</h3>
                        <form onSubmit={handleUpdateUser}>
                            <input type="text" name="name" defaultValue={user.name} />
                            <br />
                            <input type="email" name="email" defaultValue={user.email} />
                            <br />
                            <input type="submit" />
                        </form>
                    </> : ''
            }
        </div>
    );
};

export default Update;