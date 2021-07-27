export default function Artists(artists) {
    return `
    <h1>Artist List</h1>
    <ol>
        ${artists.map(artists => {
        return `
                <li>
                    ${artists.name} - ${artists.image}
                    <button class="artist_edit">Edit</button>
                    <button class="artist_delete">Delete</button>
                </li>
            `;
    }).join('')}
    </ol>

    <section class="artistForm">
    Add Artist: <input type="text" id="artistName" placeholder='Enter Artist Name' />
    <input type="file" id="artistImage"/>
    <input type="text" id="artistAge" placeholder='Enter Age' />
    <input type="text" id="artistRecordLabel" placeholder='Enter Record Label' />
    <input type="text" id="artistHomeTown" placeholder='Enter Home Town' />
    <button id="saveArtistButton">Add Artist</button>
    </section>
    `;
}