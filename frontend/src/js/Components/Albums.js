export default function Albums(albums){
    return `
    <h1>Albums List</h1>
    <ol>
        ${albums.map(albums =>{
            return `
                <li>
                    ${albums.name} submitted by ${albums.artist.name}
                </li>
            `;
        }).join('')}
    </ol>

    
    `;
}