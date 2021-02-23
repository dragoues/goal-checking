import React from 'react'
import PropTypes from 'prop-types'

const Dash = (props) => {
    return (
        <div>
            <h1> Join </h1>
        </div>
    )
}

export default Dash;

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Header />
                <GlobalStyles />
                <Dash />
            </ThemeProvider>
        </div>
    );
}

- Views / Checkin.js
    - Views / Join.js
    - Views / Login.js
    - Views / Profile.js


