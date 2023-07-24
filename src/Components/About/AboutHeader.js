import React from "react";
import AboutHeaderTitle from "../../Elements/About/AboutHeaderTitle";
import AboutHeaderCloseIcon from "../../Elements/About/AboutHeaderCloseIcon";
function MenuHeader({ uistate, setUiState }) {
    return (
        <nav className="nav__header">
            <AboutHeaderTitle />
            <AboutHeaderCloseIcon uistate={uistate} setUiState={setUiState} />
        </nav>
    );
}

export default MenuHeader;
