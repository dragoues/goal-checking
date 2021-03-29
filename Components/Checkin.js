import React, {
    useState,
    useEffect
} from "react";
import avatarPlaceHolder from "../assets/avatar_placeholder.png"
import moment from "moment";
import PropTypes from "prop-types";
import Tile from "./Tile";
import styled from "styled-components";
import avatarSmall from "../assets/avatar_small.png";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";

import Histogram from "./Histogram";

function LikeButton(props) {
    const StyledDiv = styled.div`
    border-radius: 11px;
    border: 1px solid ${({ theme }) => theme.colors.purple};
    width: 40px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.purple};
  `;

    return (<
        StyledDiv >
        <
        h6 >
            <
                FontAwesomeIcon style={
                    {
                        fontSize: "12px"
                    }
                }
                icon={
                    faHeart
                }
            /> 12{" "} < /
        h6 > <
        /StyledDiv>
    );
}

const StyledDetailsArea = styled.div `
    display: grid;
    grid-template-columns: 0.2fr 3fr;

    textarea {
                border - radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.darkShade[25]};
    }`;