export default function Artists(artists) {
    return `
    <h1>Artist List</h1>
    <ol>
        ${artists.map(artists => {
        return `
                <li>
                    ${artists.name} - ${artists.image}
                </li>
            `;
    }).join('')}
    </ol>

    <section class="artistForm">
    <input type="text" id="artistName" placeholder='Enter Artist Name' />
    <input type="file" id="artistImage"/>
    <input type="text" id="artistAge" placeholder='Enter Age' />
    <input type="text" id="artistRecordLabel" placeholder='Enter Record Label' />
    <input type="text" id="artistHomeTown" placeholder='Enter Home Town' />
    <button id="saveArtistButton">Add Artist</button>
    </section>
    `;
}