export default {
    DisplayArtist,
}

function DisplayArtist(artist){
    if(artist.albums == null){
        artist.albums = [];
    }

    return `
        <h1>${artist.name}
        <br />
            ${artist.image}
        </h1>
        <ul>
            ${artist.albums.map(album => {
                return `
                    <li>
                        ${album.title} 
                        
                    </li>
                    <ul>
                        <li>
                        ${album.image}
                        </li>
                        <li>
                        ${album.recordLabel} 
                        </li>
                        <li>
                        ${album.category} 
                        </li>
                    </ul>
                    
                   
                `;
            }).join('')}
        </ul>

        <section class="artist_addAlbum">
            <input type="text" id="albumTitle" placeholder='Enter Album Title' />
            <input type="file" id="albumImage"/>
            <input type="text" id="albumRecordLabel" placeholder='Enter Record Label' />
            <input type="text" id="albumCategory" placeholder='Enter Album Category' />
            <button id="saveSongButton">Add Album</button>
        </section>
        
        
    `;
}