export default function Albums(albums) {
    return `
    <h1>Albums List</h1>
    <ol>
        ${albums.map(album => {
        return `
                <li>
                    <h4 class="artist_album">${album.title} As Performed by ${album.artist.name}</h4>
                    <button class="album_edit" id="${album.id}">Edit</button>
                    <button class="album_delete" id="${album.id}">Delete</button>
                </li>
            `;
    }).join('')}
    </ol>

    <section class="albumForm">
    Add Album: <input type="text" id="albumTitle" placeholder='Enter Album Name' />
    <select id="artists">
    </select>
    <input type="file" id="albumImage"/>
    <input type="text" id="recordLabel" placeholder='Enter Record Label' />
    <input type="text" id="albumCategory" placeholder='Enter Album Category' />
    <button id="saveAlbumButton">Save Album</button>
    </section>
    `;
}