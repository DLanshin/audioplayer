import React from "react";
import { RiMenu4Fill } from "react-icons/ri";

function MenuIcon({ uistate, setUiState }) {
    const navHandler = () => {
        setUiState({ ...uistate, aboutShown: true });
    };
    return <RiMenu4Fill className="menu__icon" onClick={navHandler} />;
}

export default MenuIcon;
