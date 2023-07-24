import React from "react";
import { RiCloseFill } from "react-icons/ri";

function MenuIcon({ uistate, setUiState }) {
    const libraryCloseHandler = () => {
        setUiState({ ...uistate, libraryShown: false });
    };
    return (
        <RiCloseFill
            className="library__menu__icon"
            onClick={libraryCloseHandler}
        />
    );
}

export default MenuIcon;
