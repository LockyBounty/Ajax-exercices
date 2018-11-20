// {   

//     const createResultList = (results) => {

//     }

//     const search = value => {
//         const url = `https://musicdemons.com/api/v1/artist/autocomplete`;

//     };

//     const handleKeyUpSearch = e => {
//         const $input = e.currentTarget;
//         search($input.value);
//     };

//     const init = () => {
//         document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
//     };

//     init();

//}

let donneesNSA;
let hunter = document.querySelector(".content");
let artist = document.querySelector(".artist");
let zoneSong = document.querySelector(".songs");

let el87;


let xhr = new XMLHttpRequest();
xhr.open(`POST`, `https://musicdemons.com/api/v1/artist/autocomplete`);

xhr.onload = function () {
    if (this.status === 200) {
        console.log(xhr.responseText);
        donneesNSA = JSON.parse(xhr.responseText);
    }
    loadTextLocky();

}
xhr.send();

/* On crée et on met notre fonction dans une boucle pour générer une liste */
/* et la fonction est appelée dans le xhr */


let loadTextLocky = () => {

    artist.innerHTML = `${donneesNSA[i].name}`;

    
    el87 = document.createElement("LI");
    el87.innerHTML = `${donneesNSA[i].text}`;
    let afficheAuTop87 = zoneSong.appendChild(el87);
    zoneSong.insertBefore(afficheAuTop87, zoneSong.firstElementChild);


}

