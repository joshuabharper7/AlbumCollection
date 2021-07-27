export default function Songs(songs) {
    return `
    <h1>Song List</h1>
    <ol>
        ${songs.map(songs => {
        return `
                <li>
                    Title: ${songs.title} Duration: ${songs.duration} 
                    <button class="song_edit">Edit</button>
                    <button class="song_delete">Delete</button>
                </li>
            `;
    }).join('')}
    </ol>

    <section class="songForm">
    Add Song: <input type="text" id="songTitle" placeholder='Enter Song Title' />
    <input type="text" id="songDuration" placeholder='Enter Song Duration' />
    <select id="albums">
    </select>
    <button id="saveSongButton">Add Song</button>
    </section>
    `;
}