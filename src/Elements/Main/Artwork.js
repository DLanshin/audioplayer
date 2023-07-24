import React from "react";
import colors from "../../Utils/Colors";
import shadow from "../../Utils/Shadows";

const Artwork = ({ uistate, songState }) => {
    const currentPalette = songState.currentSong[0].palette;
    return (
        <div
            className="artwork"
            style={{
                boxShadow: `${shadow(
                    0,
                    0,
                    25,
                    0,
                    colors[`${currentPalette}`]
                )}`,
            }}
        >
            <img
                src={`${songState.currentSong[0].thumbUrl}`}
                alt="Album Art"
                className={`artwork__img`}
                style={{
                    animation: "spinning 7s infinite linear",
                    animationPlayState: uistate.songPlaying
                        ? "running"
                        : "paused",
                }}
            />
        </div>
    );
}

export default Artwork;
