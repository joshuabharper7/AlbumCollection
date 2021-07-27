export default function Albums(albums) {
    return `
    <h1>Albums List</h1>

    <section class="albumForm">
    <label>Add Album: </label><input type="text" id="albumTitle" placeholder='Enter Album Name' />
    <br/>
    <label>Artist: </label><select id="artists">
    </select>
    <br/>
    <label>Image: </label><input type="file" id="albumImage"/>
    <br/>
    <label>Record Label: </label><input type="text" id="recordLabel" placeholder='Enter Record Label' />
    <br/>
    <label>Category: </label><input type="text" id="albumCategory" placeholder='Enter Album Category' />
    <br/>
    <button id="saveAlbumButton">Save Album</button>
    </section>

    <ol>
        ${albums.map(album => {
        return `

        

                <li>
                    <h4 class="artist_album" id="${album.id}">${album.title} As Performed by ${album.artist.name}</h4>
                    <button class="album_edit" id="${album.id}">Edit</button>
                    <button class="album_delete" id="${album.id}">Delete</button>
                </li>
            `;
    }).join('')}
    </ol>

    
    `;
}