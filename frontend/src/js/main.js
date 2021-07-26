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
import apiAction from "./api/api-actions"

const appDiv = document.getElementById("app");
const albumURL = "https://localhost:44313/api/album/";
const artistURL = "https://localhost:44313/api/artist/";
const songURL = "https://localhost:44313/api/song/";
const reviewURL = "https://localhost:44313/api/review/";

export default() => {
    setupHeader(); 
    setupFooter();
    navHome();
    navAlbums();
    navArtists();
    navSongs();
    navReviews();
}

function setupHeader(){
    const headerElement = document.querySelector(".header");
    headerElement.innerHTML = Header();
}

function setupFooter(){
    const footerElement = document.querySelector(".footer");
    footerElement.innerHTML = Footer();
}

function navHome() {
    const homeNavButton = document.querySelector(".nav_Home");
    homeNavButton.addEventListener("click", function (){
        appDiv.innerHTML = "";
    });
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
        apiAction.getRequest(artistURL, data => {
            appDiv.innerHTML = Artists(data);
            AddArtist();
        });
    });
}

function navSongs() {
    const songsNavButton = document.querySelector(".nav_Songs");
    songsNavButton.addEventListener("click", function() {
        fetch(songURL).then(response => response.json()).then(data => {

            appDiv.innerHTML = Songs(data);
            fillAlbums();
            AddSong();
        })
    });
}

function navReviews() {
    const reviewsNavButton = document.querySelector(".nav_Reviews");
    reviewsNavButton.addEventListener("click", function() {
        fetch(reviewURL).then(response => response.json()).then(data => {

            appDiv.innerHTML = Reviews(data);
            fillAlbums();
            AddReview();
        })
    });
}

function fillArtists(){
    let dropdown = document.getElementById("artists");
    dropdown.length = 0;

    let defaultOption = document.createElement("option");
    defaultOption.text = "Select An Artist";
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

function fillAlbums(){
    let dropdown = document.getElementById("albums");
    dropdown.length = 0;

    let defaultOption = document.createElement("option");
    defaultOption.text = "Select An Album";
    defaultOption.disabled = 'disabled';

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    fetch(albumURL).then(response => response.json()).then(data => {
        let option;
        data.forEach(function(album){
            option = document.createElement('option');
            option.text = album.title;
            option.value = album.id;
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
        
        if(artistId != "Select An Artist"){
            console.log(requestBody);
            console.log(albumURL);
            fetch(albumURL, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(requestBody)
            }).then(response => response.json())
            .then(data => {
                appDiv.innerHTML = Albums(data);
                console.log(data);
            });
        }else{
            let p = document.getElementById("responseMessage");
            p.innerText = 'You must select a artist first.';
        }
        

    });
}

function AlbumArtists(){
    const albumElements = document.querySelectorAll(".artist_album");
    albumElements.forEach(element => {
        element.addEventListener('click', function(){
            let albumId = element.id;

            apiAction.getRequest(`${albumURL}${albumId}`, data => {
                appDiv.innerHTML = Album.DisplayAlbum(data);
                Album.SwitchToEdit();
                OwnerAddTodo();
            });

        });
    });
}

function DeleteAlbum(){
    const albumDeleteButtons = document.querySelector(".album_delete");
    albumDeleteButtons.forEach(element => {
        element.addEventListener('click', function(){
            let albumId = element.parentElement.getElementsByTagName("h4")[0].id;

            apiAction.deleteRequest(albumURL, albumId, data => {
                element.parentElement.remove();
            });

        });
    })
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

function AddSong(){
    const saveSongButton = document.getElementById("saveSongButton");
    saveSongButton.addEventListener('click', function(){
        let songTitle = document.getElementById("songTitle").value;
        let songDuration = document.getElementById("songDuration").value;
        let albumId = document.getElementById("albums").value;

        const requestBody = {
            Title: songTitle,
            Duration: songDuration,
            AlbumId: albumId
        };

        if(albumId != "Select An Album"){
            fetch(songURL, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(requestBody)
            }).then(response => response.json())
            .then(data => {
                appDiv.innerHTML = Songs(data);
                fillAlbums();
            });
        }else{
            let p = document.getElementById("responseMessage");
            p.innerText = 'You must select an album first.';
        }

    });
}

function AddReview(){
    const saveReviewButton = document.getElementById("saveReviewButton");
    saveReviewButton.addEventListener('click', function(){
        let albumId = document.getElementById("albums").value;
        let reviewContent = document.getElementById("reviewContent").value;
        let reviewerName = document.getElementById("reviewerName").value;

        const requestBody = {
            AlbumId: albumId,
            Content: reviewContent,
            Reviewername: reviewerName
           
        };

        if(albumId != "Select An Album"){
            fetch(reviewURL, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(requestBody)
            }).then(response => response.json())
            .then(data => {
                appDiv.innerHTML = Reviews(data);
                fillAlbums();
            });
        }else{
            let p = document.getElementById("responseMessage");
            p.innerText = 'You must select an album first.';
        }

    });
}

