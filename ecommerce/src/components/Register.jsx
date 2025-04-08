import React from 'react';

export default function Register() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
        <h1>Registration</h1>
        <form action="">
            <label htmlFor="username">Username: </label>
            <input type="text" name="usernameid" id="usernameid" /><br />
            <label htmlFor="">Email: </label>
            <input type="email" name="Email" id="email"/><br />

            <label htmlFor="">Password: </label>
            <input type="text" name="Password" id="password"/><br />
            <label htmlFor="">Confirm Password: </label>
            <input type="text" name="Confirm_Password" id="confirm_password"/><br />
            <button type="Submit">Submit</button>
        </form>

    </div>
  )
}











