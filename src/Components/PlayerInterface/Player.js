import React from "react";
import PlayerControl from "../Main/PlayerControl";
import SeekControl from "../Main/SeekControl";
function Player({
    uistate,
    setUiState,
    songState,
    setSongState,
    audioRef,
    seekWidth,
}) {
    return (
        <div className="player">
            <SeekControl
                uistate={uistate}
                setUiState={setUiState}
                songState={songState}
                setSongState={setSongState}
                audioRef={audioRef}
                seekWidth={seekWidth}
            />
            <PlayerControl
                uistate={uistate}
                songState={songState}
                setUiState={setUiState}
                setSongState={setSongState}
                audioRef={audioRef}
            />
        </div>
    );
}

export default Player;
