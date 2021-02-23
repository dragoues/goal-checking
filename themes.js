const theme = {
    colors: {
        purple: "#BC9CFF",
    },
    typography: {
        fontFamily: "Quicksand",
        h1: {
            fontSize: "42px",
        },
    },
};
export default theme;

const DaysCompleteHeading = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.purple};
`;


`
body {
  font-family:  ${(props) => props.theme.typography.fontFamily}
}

h1 {
  font-size:  ${(props) => props.theme.typography.h1.fontSize} 
}
`;

