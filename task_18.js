

import React, { useState } from 'react';


function Task_18th() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, mobile };
    setUsers([...users, newUser]);
    setName('');
    setEmail('');
    setMobile('');
  };

  const handleEdit = (index) => {
    const user = users[index];
    setName(user.name);
    setEmail(user.email);
    setMobile(user.mobile);
  };

  const handleDelete = (index) => {
    setUsers(users.filter((user, i) => i !== index));
  };

  return (
   <center>
    <div>
      <h1>Users App</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />    
        <label>Mobile:</label>
        <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <br /><br />
        <button type="submit">Add User</button>
      </form>
      <table>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
             Name: {user.name}<span> | </span>
             Email: {user.email}<span> | </span>
             Mobile: {user.mobile}<span>  </span>
            <button onClick={() => handleEdit(index)}>Edit</button><span>  </span>
            <button onClick={() => handleDelete(index)}>Delete</button><br />
          </li>
        ))}
      </ul>
      </table>
    </div>
    </center>
   
  );
}

export default Task_18th;



