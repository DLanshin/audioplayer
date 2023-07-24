import React from "react";
import { RiPlayFill } from "react-icons/ri";
import { IoIosPause } from "react-icons/io";
import shadow from "../../Utils/Shadows";
import colors from "../../Utils/Colors";
import gradients from "../../Utils/Gradients";

function PlayerPlayButton({
    uistate,
    setUiState,
    songState,
    audioRef,
    setSongState,
}) {
    const currentPalette = songState.currentSong[0].palette;
    const playPauseHandler = () => {
        setUiState({ ...uistate, songPlaying: !uistate.songPlaying });
        if (uistate.songPlaying === true) {
            audioRef.current.pause();
            setSongState({ ...songState, isPlaying: false });
        } else {
            audioRef.current.play();
            setSongState({ ...songState, isPlaying: true });
        }
    };

    const PlayPauseButton = () => {
        if (uistate.songPlaying) {
            return (
                <IoIosPause className="player__control-icon player__control-icon--white" />
            );
        } else {
            return (
                <RiPlayFill className="player__control-icon player__control-icon--white" />
            );
        }
    };

    return (
        <div
            className="player__control--play-button"
            onClick={playPauseHandler}
        >
            <PlayPauseButton />
        </div>
    );
}

export default PlayerPlayButton;
