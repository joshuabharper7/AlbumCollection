export default function Albums(albums) {
    return `
    <h1>Albums List</h1>
    <ol>
        ${albums.map(albums => {
        return `
                <li>
                    ${albums.title} As Performed by ${albums.artist.name}
                </li>
            `;
    }).join('')}
    </ol>

    <section class="albumForm">
    <input type="text" id="albumTitle" placeholder='Enter Album Name' />
    <select id="artists">
    </select>
    <input type="file" id="albumImage"/>
    <input type="text" id="recordLabel" placeholder='Enter Record Label' />
    <input type="text" id="albumCategory" placeholder='Enter Album Category' />
    <button id="saveAlbumButton">Save Album</button>
    </section>
    `;
}