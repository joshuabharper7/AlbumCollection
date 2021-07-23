export default function Album(album){
    if(album.artists == null){
        album.artists = [];
    }

    return `
        <h1>${album.title}
        <br />
            ${album.image}
        </h1>
        <ul>
            ${album.artists.map(artist => {
                return `
                    <li>
                        ${artist.name}
                    </li>
                    <li>
                        ${artist.image}
                    </li>
                    <li>
                        ${album.songs}
                    </li>
                   
                `;
            }).join('')}
        </ul>
        
    `;
}