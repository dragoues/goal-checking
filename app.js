import GlobalStyles from "./config/GlobalStyles";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";

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




