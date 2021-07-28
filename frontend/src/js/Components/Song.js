export default {
    DisplaySong,
}

function DisplaySong(song){
    return `
        <h1><label><strong>Song Title: </strong></label>${song.title}</h1>
        
        <h4><label>Song Duration: </label>${song.duration}</h4>

        <h4><label>Album: </label>${song.album.title}</h4>
        
    `;
}