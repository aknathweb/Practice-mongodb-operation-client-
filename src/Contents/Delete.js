import React from 'react';

const Delete = () => {
    const handleDelete = (event) => {
        event.preventDefault();
        const DeleteId = event.target.id.value;
        // console.log(DeleteId);
        const agree = window.confirm(`Do you sure, you want to delete: ${DeleteId}`);
        console.log(agree)
        if (agree) {
            fetch(`http://localhost:5000/users/${DeleteId}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0)
                        // alert('Deleted successfully');
                        event.target.reset();
                })
        }
    }
    return (
        <div>
            <h1>Delete Operation</h1>
            <form onSubmit={handleDelete}>
                <input type="text" name="id" placeholder='delete id' />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Delete;