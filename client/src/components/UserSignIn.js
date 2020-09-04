import React from 'react';
import { NavLink } from "react-router-dom";

/*
    This component provides the "Sign In" screen by rendering a form that allows a user to sign using their existing account information. 
    The component also renders a "Sign In" button that when clicked signs in the user and a "Cancel" button that returns the user to the default route (i.e. the list of courses).
*/

// signin - UserSignIn

const UserSignIn = () => {

    return (
        <div>
            <div className="bounds">
                <div className="grid-33 centered signin">
                    <h1>Sign In</h1>
                        <div>
                            <form>
                                <div><input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value=""></input></div>
                                <div><input id="password" name="password" type="password" className="" placeholder="Password" value=""></input></div>
                                <div className="grid-100 pad-bottom">
                                    <button className="button" type="submit">Sign In</button>
                                    <button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
                            </form>
                        </div>
                    <p>&nbsp;</p>
                <p>Don't have a user account? <NavLink to="/signup">Click here</NavLink> to sign up!</p>
                </div>
            </div>
        </div>
    );
}

export default UserSignIn;