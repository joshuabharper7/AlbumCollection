export default {
    DisplayAlbum,
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
        <ul>
            ${album.artists.map(artist => {
                return `
                    <li>
                        ${artist.name}
                        
                    </li>
                    <li>
                        ${artist.image}
                    </li>
                    <li>
                        ${album.songs} <button class="song_delete">Delete</button>
                    </li>
                    
                   
                `;
            }).join('')}
        </ul>

        <section class="album_addSong">
            <input type="text" id="songTitle" placeholder='Enter Song Title' />
            <input type="text" id="songDuration" placeholder='Enter Song Duration' />
            <select id="albums">
            </select>
            <button id="saveSongButton">Add Song</button>
        </section>
        
        
    `;
}

