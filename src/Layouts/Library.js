import React from "react";
import LibraryHeader from "../Components/Library/LibraryHeader";
import LibraryListItem from "../Components/Library/LibraryListItem";

function Library({
    uistate,
    setUiState,
    setSongState,
    songState,
    songData,
    audioRef,
}) {

    return (
        <div
            className={`library ${
                uistate.libraryShown ? "" : "library--hidden"
            }`}
        >
            <LibraryHeader uistate={uistate} setUiState={setUiState} />
            <div className="library__wrapper">
                {songData.map((song) => (
                    <LibraryListItem
                        key={song.id}
                        song={song}
                        songState={songState}
                        setSongState={setSongState}
                        audioRef={audioRef}
                    />
                ))}
            </div>
        </div>
    );
}

export default Library;
