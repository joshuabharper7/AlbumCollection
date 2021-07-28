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
        <h4>${album.artist.name}</h4>
        <ul>
            ${album.songs.map(song => {
                return `
                    <li>
                        ${song.title}
                        
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

