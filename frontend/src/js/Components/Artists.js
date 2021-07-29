export default function Artists(artists) {
    return `
    <h1 class="font-effect-fire">Artist List</h1>
    <ol>
        ${artists.map(artist => {
        return `
                <li>
                    <h4 class="artist_name" id="${artist.id}">${artist.name} - ${artist.image}</h4>
                    <button class="artist_edit" id="${artist.id}">Edit</button>
                    <button class="artist_delete" id="${artist.id}">Delete</button>
                </li>
            `;
    }).join('')}
    </ol>

    <section class="artistForm">
    <label>Add Artist: </label><input type="text" id="artistName" placeholder='Enter Artist Name' />
    <br/>
    <label>Image: </label><input type="file" id="artistImage"/>
    <br/>
    <label>Age: </label><input type="text" id="artistAge" placeholder='Enter Age' />
    <br/>
    <label>Record Label: </label><input type="text" id="artistRecordLabel" placeholder='Enter Record Label' />
    <br/>
    <label>Home Town: </label><input type="text" id="artistHomeTown" placeholder='Enter Home Town' />
    <br/>
    <button id="saveArtistButton">Add Artist</button>
    </section>
    `;
}