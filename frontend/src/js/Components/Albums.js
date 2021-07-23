export default function Albums(albums) {
    return `
    <h1>Albums List</h1>
    <ol>
        ${albums.map(albums => {
        return `
                <li>
                    ${albums.name} As Performed by ${albums.artist.name}
                </li>
            `;
    }).join('')}
    </ol>

    <section class="albumForm">
    <input type="text" id="albumName" placeholder='Enter Album Name' />
    <select id="Artist">
    </select>
    <button id="saveAlbumButton">Save Album</button>
    </section>
    `;
}