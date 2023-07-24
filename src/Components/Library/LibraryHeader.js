import React from "react";
import LibraryHeaderTitle from "../../Elements/Library/LibraryHeaderTitle";
import LibraryHeaderCloseIcon from "../../Elements/Library/LibraryHeaderCloseIcon";
function MenuHeader({ uistate, setUiState }) {
    return (
        <nav className="nav__header">
            <LibraryHeaderTitle />
            <LibraryHeaderCloseIcon uistate={uistate} setUiState={setUiState} />
        </nav>
    );
}

export default MenuHeader;
