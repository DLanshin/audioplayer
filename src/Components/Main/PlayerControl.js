import React, { useRef } from "react";
import {
    RiPlayListLine,
    RiSunLine,
    RiMoonLine,
    RiSkipBackLine,
    RiSkipForwardLine,
} from "react-icons/ri";
import PlayerPlayButton from "../../Elements/Main/PlayerPlayButton";
import AudioStore from "../../Store/AudioStore";

function PlayerControl({
    uistate,
    setUiState,
    songState,
    setSongState,
    audioRef,
}) {
    const {isLoading, songs} = AudioStore;
    let currentIndex = songs.findIndex(
        (song) => song === songState.currentSong[0]
    );

    const previousSongHandler = () => {
        setTimeout(() => {
            if ((currentIndex - 1) % songs.length === -1) {
                setSongState({
                    ...songState,
                    currentSong: [songs[songs.length - 1]],
                });
            } else {
                setSongState({
                    ...songState,
                    currentSong: [
                        songs[(currentIndex - 1) % songs.length],
                    ],
                });
            }
            if (songState.isPlaying) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.then((audio) => {
                        audioRef.current.play();
                    });
                }
            }
        }, 300);
    };

    const nextSongHandler = () => {
        setTimeout(() => {
            setSongState({
                ...songState,
                currentSong: [songs[(currentIndex + 1) % songs.length]],
            });
            if (songState.isPlaying) {
                audioRef.current.play();
            }
        }, 150);
    };

    const darkModeToggleHandler = () => {
        setUiState({ ...uistate, darkMode: !uistate.darkMode });
    };

    const libraryToggleHandler = (e) => {
        if (window.visualViewport.width < 900) {
            setUiState({ ...uistate, libraryShown: true });
            console.log("changed");
        }
    };

    const songEndHandler = async () => {
        await setSongState({
            ...songState,
            currentSong: [songs[(currentIndex + 1) % songs.length]],
        });
        if (songState.currentSong[0].isPlaying) {
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then((audio) => audioRef.current.play());
            }
        }
    };

    const DarkModeButton = () => {
        if (!uistate.darkMode) {
            return (
                <RiMoonLine
                    className="player__control-icon"
                    onClick={darkModeToggleHandler}
                />
            );
        } else {
            return (
                <RiSunLine
                    className="player__control-icon"
                    onClick={darkModeToggleHandler}
                />
            );
        }
    };

    return (
        <div className="player__control">
            <RiPlayListLine
                uistate={uistate}
                setUiState={setUiState}
                className="player__control-icon disabled-on-desktop"
                onClick={libraryToggleHandler}
            />
            <RiSkipBackLine
                className="player__control-icon"
                onClick={previousSongHandler}
            />
            <PlayerPlayButton
                uistate={uistate}
                setUiState={setUiState}
                setSongState={setSongState}
                songState={songState}
                audioRef={audioRef}
            />
            <RiSkipForwardLine
                className="player__control-icon"
                onClick={nextSongHandler}
            />
            <DarkModeButton />
        </div>
    );
}

export default PlayerControl;
