

import React, { useState } from "react";



const Header = () => {
    const [open, setOpen] = useState(false);
  ...

const handleClick = (e) => {
    setOpen(true);    

 <StyledMenuWrapper /> <StyledMenuWrapper /> ?
        <StyledMenuWrapper open={open}>
            <Menu />
        </StyledMenuWrapper>

     function Menu(props) {
        const { onClick } = props;
        const location = useLocation();
......