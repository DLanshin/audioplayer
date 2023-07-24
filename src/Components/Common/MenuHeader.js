import React from "react";
import MenuTitle from "../../Elements/Common/MenuTitle";
import MenuIcon from "../../Elements/Common/MenuIcon";
function MenuHeader({ uistate, setUiState }) {
    return (
        <nav className="nav__header">
            <MenuTitle />
            <MenuIcon uistate={uistate} setUiState={setUiState} />
        </nav>
    );
}

export default MenuHeader;
