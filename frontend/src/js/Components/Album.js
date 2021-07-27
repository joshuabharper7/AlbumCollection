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
                        ${album.song.title} <button class="song_delete">Delete</button>
                    </li>
                    
                   
                `;
            }).join('')}
        </ul>

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

