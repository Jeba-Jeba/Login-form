import React from "react";

function LoginForm() {
    return (
        <div id="form">
            <h2>Hello</h2>
            <h3>Login into your account </h3>
            <form action="/login" method="post">
                <ul>
                <li><label for="username">Username </label><input type="text" name="username" placeholder="Username" required /></li>
                <li><label for="password">Password </label><input type="password" name="password" placeholder="Password" required /></li>
                <li><input type="submit" value="Login" /></li>
                </ul>
            </form>
        </div>
    );
}

export default LoginForm;
