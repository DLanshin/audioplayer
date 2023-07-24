import React from "react";
import { RiCloseFill } from "react-icons/ri";

function AboutHeaderCloseIcon({ uistate, setUiState }) {
    const aboutCloseHandler = () => {
        setUiState({ ...uistate, aboutShown: false });
    };
    return <RiCloseFill className="menu__icon" onClick={aboutCloseHandler} />;
}

export default AboutHeaderCloseIcon;
