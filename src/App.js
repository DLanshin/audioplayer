import React, {useEffect, useRef, useState} from "react";
import "./Styles/app.scss";
import MenuHeader from "./Components/Common/MenuHeader";
import Artwork from "./Elements/Main/Artwork";
import SongInfo from "./Components/Main/SongInfo";
import Player from "./Components/PlayerInterface/Player";
import Library from "./Layouts/Library";
import About from "./Layouts/About";
import AudioStore from "./Store/AudioStore";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    // Detect if the user has dark mode turned on
    let userDarkModeApplied = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const {isLoading, songs} = AudioStore;
    // UI Components State
    const [uiState, setUiState] = useState({
        aboutShown: false,
        libraryShown: false,
        libraryPinned: false,
        darkMode: userDarkModeApplied ? true : false,
        coverSpinning: false,
        songPlaying: false,
        seekWidth: 0,
    });
    // Song States
    const [songState, setSongState] = useState({
        currentSong: [],
        isPlaying: false,
        elapsed: 0,
        duration: 0,
    });

    useEffect(()=>{
        AudioStore.fetch().then(()=>{
            setSongState({
                ...songState,
                currentSong: [AudioStore.songs[0]]
            })
        });
    },[]);
    // Reference for the audio
    const audioRef = useRef(null);

    // Setting the background as the cover artwork
    document.body.style.backgroundImage = `url('${songState.currentSong[0] ? songState.currentSong[0].coverUrl : ""}')`;

    const songEndHandler = async () => {
        let currentIndex = songs.findIndex(
            (song) => song === songState.currentSong[0]
        );
        await setSongState({
            ...songState,
            currentSong: [songs[(currentIndex + 1) % songs.length]],
        });
        audioRef.current.play();
    };

    const songInfoHandler = (e) => {
        const elapsed = e.target.currentTime;
        const duration = e.target.duration;
        setSongState({
            ...songState,
            duration: duration,
            elapsed: elapsed,
        });
    };

    if(isLoading || !songState.currentSong.length || !AudioStore.songs){
        return (<></>)
    }
    console.log(songState.currentSong)
    return (
        <div
            className={`app__wrapper ${
                uiState.darkMode ? "dark-mode" : "light-mode"
            }`}
            style={{
                backdropFilter: `${
                    uiState.libraryShown || uiState.aboutShown
                        ? "none"
                        : "blur(1.5rem)"
                }`,
                WebkitBackdropFilter: `${
                    uiState.libraryShown || uiState.aboutShown
                        ? "none"
                        : "blur(1.5rem)"
                }`,
            }}
        >
            {/* The menu header only displays the menu options */}
            {/* It only needs access to isNavMenuShown, setNavMenuShown, */}
            <MenuHeader uiState={uiState} setUiState={setUiState} />
            <Artwork uiState={uiState} songState={songState} />
            <SongInfo songState={songState} />
            <Player
                uiState={uiState}
                setUiState={setUiState}
                audioRef={audioRef}
                songState={songState}
                setSongState={setSongState}
            />
            <Library
                uiState={uiState}
                setUiState={setUiState}
                songState={songState}
                setSongState={setSongState}
                songData={AudioStore.songs}
                audioRef={audioRef}
            />
            <About uiState={uiState} setUiState={setUiState} />
            <audio
                ref={audioRef}
                src={songState.currentSong[0] ? songState.currentSong[0].audio : null}
                onTimeUpdate={songInfoHandler}
                onLoadedMetadata={songInfoHandler}
                onEnded={songEndHandler}
            ></audio>
        </div>
    );
});

export default App;
