import React from "react";

function Tile(props) {
    const { children } = props;
    const divStyle = {
        boxShadow: "0px 10px 20px rgba(31, 32, 65, 0.05)",
    };

    return <div style={divStyle}>{children}</div>;
}

export default Tile;