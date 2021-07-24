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
const albumURL = "https://localhost:44313/api/album";
const artistURL = "https://localhost:44313/api/artist";
const songURL = "https://localhost:44313/api/song";
const reviewURL = "https://localhost:44313/api/review";

export default() => {
    setupHeader(); 
    setupFooter();
    navAlbums();
    navArtists();
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
    const albumsNavButton = document.querySelector(".nav_Albums");
    albumsNavButton.addEventListener("click", function () {
        fetch(albumURL).then(response => response.json()).then(data => {
            
            appDiv.innerHTML = Albums(data);
            fillArtists();
            AddAlbum();
        });
    });
}

function navArtists() {
    const artistsNavButton = document.querySelector(".nav_Artists");
    artistsNavButton.addEventListener("click", function() {
        fetch(artistURL).then(response => response.json()).then(data => {

            appDiv.innerHTML = Artists(data);
             AddArtist();
        })
    });
}

function fillArtists(){
    let dropdown = document.getElementById("artists");
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
    const saveAlbumButton = document.getElementById("saveAlbumButton");
    saveAlbumButton.addEventListener('click', function(){
        let albumTitle = document.getElementById("albumTitle").value;
        let artistId = document.getElementById("artists").value;
        let albumImage = document.getElementById("albumImage").value;
        let recordLabel = document.getElementById("recordLabel").value;
        let albumCategory = document.getElementById("albumCategory").value;

        const requestBody = {
            Title: albumTitle,
            ArtistId: artistId,
            Image: albumImage,
            RecordLabel: recordLabel,
            Category: albumCategory
        };

        if(artistId != "Select an Artist"){
            fetch(albumURL, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(requestBody)
            }).then(response => response.json())
            .then(data => {
                appDiv.innerHTML = Albums(data);
            });
        }else{
            let p = document.getElementById("responseMessage");
            p.innerText = 'You must select a artist first.';
        }

    });
}

 function AddArtist(){
     const saveArtistButton = document.getElementById("saveArtistButton");
     saveArtistButton.addEventListener('click', function(){
         let artistName = document.getElementById("artistName").value;
         let artistImage = document.getElementById("artistImage").value;
         let artistAge = document.getElementById("artistAge").value;
         let artistRecordLabel = document.getElementById("artistRecordLabel").value;
         let artistHomeTown = document.getElementById("artistHomeTown").value;

         const requestBody = {
             Name: artistName,
             Image: artistImage,
             Age: artistAge,
             RecordLabel: artistRecordLabel,
             HomeTown: artistHomeTown
         };

         fetch(artistURL, {
             method: "POST",
             headers: {
                 "Content-Type" : "application/json"
             },
             body: JSON.stringify(requestBody)
         })
         .then(response => response.json())
         .then(data => {
             appDiv.innerHTML = Artists(data);

         });
     });
 }

