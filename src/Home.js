import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([]);
    const [hiddenRows, setHiddenRows] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3001/home')
            .then(response => setUsers(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mt-4">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>DOB</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id} className={hiddenRows.includes(user.id) ? 'd-none' : ''}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.dob}</td>
                            <td>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
