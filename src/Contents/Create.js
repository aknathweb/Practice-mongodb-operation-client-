import React, { useEffect, useState } from 'react';

const Create = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        // perform post or create operation start
        if (user) {
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    // indicate content type
                    'content-type': 'application/json'
                },
                // send user information to server
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    // Collect server response data
                    console.log("what data:", data);
                    if (data.acknowledged) {
                        alert("User added Successfully");
                    }
                })
            console.log('user: :', user)
        }
        // perform post or create operation end
    }, [user])

    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const newUser = { name, email };
        setUser(newUser);
        // console.log('new', newUser)
        event.target.reset();
    }

    return (
        <div>
            <h1>Create operation</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Create;