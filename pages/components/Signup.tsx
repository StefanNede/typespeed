import React, {useState, useEffect} from 'react';

function continueAsGuest() {
    localStorage.setItem("account", "guest")
}

export default function Signup() {
    return (
        <div>
            <h1>Log in</h1>
            <form action="">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email"/>
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password"/>
                <input type="submit" value="log in"/>
            </form>
            <section>
                Not logged in?
                <br/>
                <a href="#">Sign up</a>
                <br/>
                <a href="home" onClick={continueAsGuest}>continue as guest</a>
            </section>
        </div>
    )
}
