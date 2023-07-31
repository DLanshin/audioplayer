import React from "react";
import LibrarySongArtist from "../../Elements/Library/LibrarySongArtist";
import LibrarySongCover from "../../Elements/Library/LibrarySongCover";
import LibrarySongTitle from "../../Elements/Library/LibrarySongTitle";
import AudioStore from "../../Store/AudioStore";

function LibraryListItem({ song, setSongState, uistate, setUiState, songState, audioRef }) {

    const {songs} = AudioStore;

    const changeCurrentSongHandler = () => {
        setTimeout(() => {
            setSongState({
                ...songState,
                currentSong: [songs[songs.findIndex((s) => s === song)]],
            });
            if (songState.isPlaying) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    console.log("undefined");
                    playPromise.then((audio) => {
                        audioRef.current.play();
                    });
                }
            }
            setUiState({...uistate, libraryShown: false})
        }, 150);
    };
    return (
        <div
            onClick={changeCurrentSongHandler}
            className={`library__list-item ${
                song.id === songState.currentSong[0].id ? "active-song" : ""
            }`}
        >
            <LibrarySongCover song={song} />
            <div className="library__song-column">
                <LibrarySongTitle song={song} />
                <LibrarySongArtist song={song} />
            </div>
        </div>
    );
}

export default LibraryListItem;
