let biografyButton = document.getElementById("item-biografy");
let homeButton = document.getElementById("item-home");
let spotifyButton = document.getElementById("item-spotify");
let fentyButton = document.getElementById("item-fenty");
let referenceButton = document.getElementById("item-reference");


biografyButton.onclick = ((e) => {
    document.documentElement.scrollTop = 1250
});

homeButton.onclick = ((e) => {
    document.documentElement.scrollTop = 0
});

spotifyButton.onclick = ((e) => {
    document.documentElement.scrollTop = 2300
});

fentyButton.onclick = ((e) => {
    document.documentElement.scrollTop = 3200
});

referenceButton.onclick = ((e) => {
    document.documentElement.scrollTop = 4200
});


