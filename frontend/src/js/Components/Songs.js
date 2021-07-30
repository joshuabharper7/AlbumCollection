export default function Songs(songs) {
    return `
    <h1 class="font-effect-fire">Songs List</h1>
    <ul>
        ${songs.map(song => {
        return `
                <li>
                    <h4 class="song_name" id="${song.id}">Title: ${song.title}</h4> 
                    <button class="song_edit" id="${song.id}">Edit</button>
                    <button class="song_delete" id="${song.id}">Delete</button>
                </li>
            `;
    }).join('')}
    </ul>

    <section class="songForm">
    <label>Add Song: </label><input type="text" id="songTitle" placeholder='Enter Song Title' />
    <br/>
    <label>Duration: </label><input type="text" id="songDuration" placeholder='Enter Song Duration' />
    <br/>
    <label>Album: </label><select id="albums">
    </select>
    <br/>
    <br/>
    <button id="saveSongButton">Add Song</button>
    </section>
    `;
}