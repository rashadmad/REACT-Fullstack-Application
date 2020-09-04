import React from 'react';

/*
    This component provides the "Sign Up" screen by rendering a form that allows a user to sign up by creating a new account. 
    The component also renders a "Sign Up" button that when clicked sends a POST request to the REST API's /api/users route and signs in the user. 
    This component also renders a "Cancel" button that returns the user to the default route (i.e. the list of courses).
*/

// route: /signup - UserSignUp

const UserSignUp = () => {

    return (
        <div>
            <div className="bounds">
                <div className="grid-33 centered signin">
                    <h1>Sign Up</h1>
                        <div>
                            <form>
                                <div><input id="firstName" name="firstName" type="text" className="" placeholder="First Name" value=""></input></div>
                                <div><input id="lastName" name="lastName" type="text" className="" placeholder="Last Name" value=""></input></div>
                                <div><input id="emailAddress" name="emailAddress" type="text" className="" placeholder="Email Address" value=""></input></div>
                                <div><input id="password" name="password" type="password" className="" placeholder="Password" value=""></input></div>
                                <div><input id="confirmPassword" name="confirmPassword" type="password" className="" placeholder="Confirm Password "value=""></input></div>
                                <div className="grid-100 pad-bottom"><button className="button" type="submit">Sign Up</button><button className="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
                            </form>
                        </div>
                    <p>&nbsp;</p>
                <p>Already have a user account? <a href="sign-in.html">Click here</a> to sign in!</p>
                </div>
            </div>
        </div>
    );
}

export default UserSignUp;