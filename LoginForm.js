{
    if (isLoggedIn) {
        <LogoutButton onClick={handleLogoutClick} />;
    } else {
        <LoginButton onClick={handleLoginClick} />;
    }
}

{ isLoggedIn ? <LogoutButton onClick={handleLogoutClick} /> : <LoginButton onClick={handleLoginClick} /> }

{
    isLoggedIn && (<LogoutButton onClick={handleLogoutClick} />);
}

{
    !isLoggedIn && (<LogoutButton onClick={handleLogoutClick} />);
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 && (
         <h2>
                    You have {unreadMessages.length} unread messages.
        </h2>
        <p> 
                    You should go to your inbox ASAP - the message could be from Joe!
        </p>
            )}

            {unreadMessages.length == 0 && (
                <h2>
                    Nice work, you have no messages
                </h2>
            )}
        </div>
    );
}


http://localhost:3000/join

import React, { useState } from "react";
import { useForm } from 'react-hook-form'

function MailingList() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <label> Name </label>
            <input type="text" name="name" ref={register({ required: true, minLength: 6 })} />
            <p>{errors.name && 'Name is required'} </p>
            <label> Email </label>
            <input type="text" name="email" ref={register({ required: true })} />
            <p>{errors.email && 'Email is required'} </p>
            <input type="submit" />
        </form>);
}

export default MailingList;




import React, { useState } from "react";
import { useForm } from 'react-hook-form'

function MailingList() {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => { console.log(data) }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <label> Name </label>
            <input type="text" name="name" ref={register({ required: true, minLength: 6 })} />
            <p>{errors.name && 'Name is required'} </p>
            <label> Email </label>
            <input type="text" name="email" ref={register({ required: true })} />
            <p>{errors.email && 'Email is required'} </p>
            <input type="submit" />
        </form>);
}

export default MailingList;

function Login(props) {

    const { signInEmailUser } = props;
    const [serverErrorMessage, setServerErrorMessage] = useState('')

    const handleEmailSubmit = async data => {
        try {
            const { email, password } = data;
            await signInEmailUser(email, password);
        } catch (e) {
            setServerErrorMessage(e.message);
        }
    }

    return (
        <StyledWrapper>
            <StyledTile>

                <StyledHeading>Login With </StyledHeading>
                <Form onEmailSubmit={handleEmailSubmit} serverErrorMessage={serverErrorMessage} buttonText="LOGIN" />
                <StyledLink to="/join"> Not a member - Join </StyledLink>
            </StyledTile>
        </StyledWrapper>
    );
}

Login.propTypes = {
    signInEmailUser: PropTypes.func.isRequired
}

export default Login;



firebase.auth().onAuthStateChanged(user => {
    if (user) {
        /** do something **/
    } else {
        /** they have logged out **/
    })


fbAuth().onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        setIsAuthenticated(true);
        return;
    }
    setIsAuthenticated(false)
    return;
});


