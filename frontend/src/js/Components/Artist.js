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

        <section class="artist_addAlbum">
            <label>Title: </label><input type="text" id="albumTitle" placeholder='Enter Album Title' />
            <br/>
            <label>Image: </label><input type="file" id="albumImage"/>
            <br/>
            <label>Record Label: </label><input type="text" id="albumRecordLabel" placeholder='Enter Record Label' />
            <br/>
            <label>Category: </label><input type="text" id="albumCategory" placeholder='Enter Album Category' />
            <br/>
            <button id="saveSongButton">Add Album</button>
        </section>

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

        
        
        
    `;
}