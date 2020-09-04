import React from 'react';
import { NavLink } from "react-router-dom";

/*
    Displays the top menu bar for the application and includes buttons for signing in and signing up (if there's not an authenticated user) 
    or the user's first and last name and a button for signing out (if there's an authenticated user).
*/

const Header = () => {

    return (
        <div>
            <header className="header">
                <div className="bounds">
                    <h1 className="header--logo">Courses</h1>
                    <nav>
                        <NavLink className="signup" to="/courses/signup">Sign Up</NavLink>
                        <NavLink className="signin" to="/courses/signin">Sign In</NavLink>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;