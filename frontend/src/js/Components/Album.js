export default {
    DisplayAlbum
}

function DisplayAlbum(album){
    if(album.artists == null){
        album.artists = [];
    }

    return `
        <h1>${album.title}
        <br />
            ${album.image}
        </h1>
        <h4 class="artistName">${album.artist.name}</h4>
        <ol class="songInfo">
            ${album.songs.map(song => {
                return `
                    <li class="songName">
                        ${song.title}
                        
                    </li>
                    
                `;
            }).join('')}
        </ol>

        <section class="songForm">
            <label>Add Song: </label><input type="text" id="songTitle" placeholder='Enter Song Title' />
            <br/>
            <label>Song Duration: </label><input type="text" id="songDuration" placeholder='Enter Song Duration' />
            <br/>
            <label>Album: </label><select id="albums">
            </select>
            <br/>
            <button id="saveSongButton">Add Song</button>
        </section>
        
        
    `;
}

