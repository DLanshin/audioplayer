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
import {useTelegram} from "./Hooks/useTelegram";

const App = observer(() => {


    const {expandApp, colorScheme} = useTelegram();
    const {isLoading, songs} = AudioStore;
    // UI Components State
    const [uistate, setUiState] = useState({
        aboutShown: false,
        libraryShown: false,
        libraryPinned: false,
        darkMode: colorScheme === "dark" ? true : false,
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
        expandApp();
        AudioStore.fetch().then(()=>{
            setSongState({
                ...songState,
                currentSong: [AudioStore.songs[0]]
            })
        });
    },[]);
    // Reference for the audio
    const audioRef = useRef(null);

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
    return (
        <div
            className={`app__wrapper ${
                uistate.darkMode ? "dark-mode" : "light-mode"
            }`}
            style={{
                backdropFilter: `${
                    uistate.libraryShown || uistate.aboutShown
                        ? "none"
                        : "blur(1.5rem)"
                }`,
                WebkitBackdropFilter: `${
                    uistate.libraryShown || uistate.aboutShown
                        ? "none"
                        : "blur(1.5rem)"
                }`,
            }}
        >
            {/* The menu header only displays the menu options */}
            {/* It only needs access to isNavMenuShown, setNavMenuShown, */}
            <MenuHeader uistate={uistate} setUiState={setUiState} />
            <Artwork uistate={uistate} songState={songState} />
            <SongInfo songState={songState} />
            <Player
                uistate={uistate}
                setUiState={setUiState}
                audioRef={audioRef}
                songState={songState}
                setSongState={setSongState}
            />
            <Library
                uistate={uistate}
                setUiState={setUiState}
                songState={songState}
                setSongState={setSongState}
                songData={AudioStore.songs}
                audioRef={audioRef}
            />
            <About uistate={uistate} setUiState={setUiState} />
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
