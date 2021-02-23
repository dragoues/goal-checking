function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}


class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

function App() {
    const name = "Joe Appleton";
    const heading = <h1>Hello, {name}</h1>;

    const sum = (x, y) => x + y;

    return (
        <div>
            {heading}
            <h2> Yo {name} </h2>
            <h2>  What is the answer to 1 +1. Is it {sum(1, 1)} ? </h2>
        </div>
    );
}
}

...
import styled from "styled-components";



function DaysCompleted(props) {
    const { days, checkins } = props;

    const DaysCompleteHeading = styled.h2`
    text-align: center;
    color: #bc9cff;
  `;

    const RootDiv = styled.div`
    display: grid;
    grid-template-columns: 0.8fr;
    grid-template-rows: 55px 80px 20px auto;
    justify-content: center;
  `;

    const GoalHeading = styled.h4`
    color: #1f2041;
  `;

    return (
        <Tile>
            <RootDiv>
                <DaysCompleteHeading> {days} Days Completed! </DaysCompleteHeading>
                <Histogram barCount={7} bars={checkins.map(c => c.score * 5)} />
                <ProgressBar />
                <GoalHeading>
                    <strong>50%</strong> TO GOAL!
        </GoalHeading>
            </RootDiv>
        </Tile>
    );
}
...

const DaysCompleteHeading = styled.h2`
  text-align: center;
  color: #bc9cff;
`;






import React from "react";
import PropTypes from "prop-types";

function DaysCompleted(props) {
    const { days } = props;

    return (
        <div>
            <h1> {days} Days Completed</h1>
        </div>
    );
}

DaysCompleted.propTypes = {
    days: PropTypes.number.isRequired,
};

export default DaysCompleted;
In App.js, let's use our component. Within src/App.js:


function App() {
    return (
        <div>
            <DaysCompleted days={15} />
        </div>
    );
}


const { days } = props;
The above is the equivalent of:

const days = props.days;


DaysCompleted.propTypes = {
    days: PropTypes.number.isRequired,
};

DaysCompleted.propTypes = {
    days: PropTypes.number,
};

DaysCompleted.defaultProps = {
    days: 0,
};

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <DaysCompleted days={15} checkins={checkins}>
                    {" "}
                </DaysCompleted>
            </ThemeProvider>
        </div>
    );
}