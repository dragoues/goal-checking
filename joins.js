function Join(props) {
    const [severErrorMessage, setServerErrorMessage] = useState('')
    const { createEmailUser } = props;

    const handleEmailSubmit = async data => {
        try {
            const { email, password } = data;
            const user = await createEmailUser(email, password);
            console.log(user);
        } catch (e) {
            setServerErrorMessage(e.message);
        }
    }

    return (
        <StyledWrapper>
            <StyledTile>
                <StyledHeading>Get Started</StyledHeading>
                <StyledHeading>Join With </StyledHeading>
                <Form serverErrorMessage={severErrorMessage} onEmailSubmit={handleEmailSubmit} />
                <StyledLink to="/login"> Already a member - Login </StyledLink>
            </StyledTile>
        </StyledWrapper>
    );
}

Join.propTypes = {
    createEmailUser: PropTypes.func.isRequired
};

export default Join;

firebase.auth().signInWithEmailAndPassword('joe.appleton', 'password')

