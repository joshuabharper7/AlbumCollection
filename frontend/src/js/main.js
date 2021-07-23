import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Album from "./Components/Album";
import Albums from "./Components/Albums";
import Artist from "./Components/Artist";
import Artists from "./Components/Artists";
import Song from "./Components/Song";
import Songs from "./Components/Songs";
import Review from "./Components/Review";
import Reviews from "./Components/Reviews";

const appDiv = document.getElementById("app");


export default() => {
    setupHeader(); 
    setupFooter();

}

function setupHeader(){
    const headerElement = document.querySelector(".header");
    headerElement.innerHTML = Header();
}

function setupFooter(){
    const footerElement = document.querySelector(".footer");
    footerElement.innerHTML = Footer();
}


function navAlbums() {
    const albumsNavButton = document.querySelector(".nav_albums");
    albumsNavButton.addEventListener("click", function () {
        fetch(albumsUrl).then(response => response.json()).then(data => {
            
            appDiv.innerHTML = Albums(data);
            fillArtists();
            AddTodo();
        });
    });
}

function fillArtists(){
    let dropdown = document.getElementById("Artists");
    dropdown.length = 0;

    let defaultOption = document.createElement("option");
    defaultOption.text = "Select an Artist";
    defaultOption.disabled = 'disabled';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    fetch(artistURL).then(response => response.json()).then(data => {
        let option;
        data.forEach(function(artist){
            option = document.createElement('option');
            option.text = artist.name;
            option.value = artist.id;
            dropdown.add(option);
        });
    });
}

function AddAlbum(){
    const saveAlbumButton = document.getElementById("saveAlbumBtn");
    saveAlbumButton.addEventListener('click', function(){
        let albumName = document.getElementById("albumName").value;
        let artistId = document.getElementById("Artists").value;
        let albumImage = document.getElementById("albumImage");
        let recordLabel = document.getElementById("recordLabel")
        let albumCategory = document.getElementById("albumCategory")

        const requestBody = {
            Title: albumName,
            ArtistId: artistId,
            Image: albumImage,
            RecordLabel: recordLabel,
            Category: albumCategory
        };

        if(artistId != "Select an Artist"){
            fetch(todoURL, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(requestBody)
            }).then(response => response.json())
            .then(data => {
                appDiv.innerHTML = Artist(data);
                
            });
        }else{
            let p = document.getElementById("responseMessage");
            p.innerText = 'You must select a artist first.';
        }

    });
}

