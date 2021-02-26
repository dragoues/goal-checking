import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
    class Toggle extends React.Component {
        constructor(props) {
            super(props);
            this.state = { isToggleOn: true };

            // This binding is necessary to make `this` work in the callback
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick() {
            this.setState(state => ({
                isToggleOn: !state.isToggleOn
            }));
        }

        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            );
        }
    }

    ReactDOM.render(
        <Toggle />,
        document.getElementById('root')
    );


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


class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

function App() {
    return (
        <div>
            <GlobalStyles />
            <DaysCompleted days={15} checkins={checkins}>
                {" "}
            </DaysCompleted>
      </ThemeProvider>
    </div >
  );
}


| -src / 
   | -Components
    | - CheckinComment.js
    | - DaysCompleted.js
     ...
   | -Views /
      | - Checkin.js
    | - Dash.js
    | - Join.js
    | - Profile.js

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

const e = React.createElement;

// Display a "Like" <button>
return e(
    'button',
    { onClick: () => this.setState({ liked: true }) },
    'Like'
);


// Display a "Like" <button>
return (
    <button onClick={() => this.setState({ liked: true })}>
        Like
    </button>
);

<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

lass Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


    );


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);



class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}


class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <button onClick={() => this.handleClick()}>
                Click me
            </button>
        );
    }
}


<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>


