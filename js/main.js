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

let hunter = document.querySelector(".results");


let xhr= new XMLHttpRequest();
xhr.open(`POST`, `https://musicdemons.com/api/v1/artist/autocomplete`);

xhr.onload= function(){
    console.log(xhr.responseText);

}
xhr.send();