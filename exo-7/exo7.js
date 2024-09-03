console.log("exo-7");

for (let i = 0; i < jsonDatas.length; i++) {
    console.log(jsonDatas[i]);
}

// creer objet pour traduit le type
let tradType = {
    "car": "voiture",
    "house": "maison",
    "game": "jeu",
    "videoGame": "jeux video",
    "show": "spectacle",
}

// boucle pour ajouter le type traduit à chaque produit dans jsonDatas
for (let i = 0; i < jsonDatas.length; i++) {
    jsonDatas[i]["type traduit"] = tradType[jsonDatas[i]['type']];
    console.log(jsonDatas[i]);
}

// Affichage articles
// aller chercher la div où je veux inserer le js


function createCard(objet) {
    let card = '<h2>' + objet['name'] + '</h2>' +
        '<ul>' +
        '<li> Type: ' + objet['type'] + '</li>' +
        '<li> Description: ' + objet['description'] + '</li>' +
        '<li> Prix: ' + objet['price'] + '</li>' +
        '<li> Quantité disponible: ' + objet['quantity'] + '</li>' +
        '</ul>';
    return card;
}


//recherche par categories
// function cherche() {
//     const buttonRecherche = document.getElementById("button");
//     const input = document.getElementById("input");
//     const productDiv = document.getElementById("mes produits");
//
//     buttonRecherche.addEventListener("click", () => {
//         // Reinitialiser la page
//         productDiv.innerHTML = "";
//         const categories = input.value;
//
//         //boucle pour afficher les produits de la catégorie renseigner
//         for (let i = 0; i < jsonDatas.length; i++) {
//             if (categories === jsonDatas[i]['type']) {
//                 productDiv.innerHTML += createCard(jsonDatas[i])
//             }
//         }
//     })
// }


//recherche par categories
function cherche(query) {
    let categorie = [];
    //boucle pour afficher les produits de la catégorie renseigner
    for (let i = 0; i < jsonDatas.length; i++) {
        if (jsonDatas[i]['type'].includes(query)) {
            categorie.push(jsonDatas[i]);
        }
    }
    return categorie
}

function display(elements_to_display) {
    const productDiv = document.getElementById("mes_produits");
    const buttonRecherche = document.getElementById("button");
    const input = document.getElementById("input");
    const checkBox = document.getElementById('check');

    productDiv.innerHTML = "";

}

// affichage en fonction de la dispo
// function available() {
//     const checkBox = document.getElementById('check');
//     const rechercheDiv = document.getElementById("recherche");
//     const productDiv = document.getElementById("mes produits");
//     // action au clic dans checkbox
//     rechercheDiv.addEventListener('change', () => {
//         for (let i = 0; i < jsonDatas.length; i++) {
//             if (checkBox.checked) {
//                 if (jsonDatas[i]['quantity'] > 0) {
//
//                     productDiv.innerHTML += createCard(jsonDatas[i])
//                 }
//             }
//         }
//     });
// }

function available(listeCategorie) {
    let availableproduct = [];
    for (let i = 0; i < listeCategorie.length; i++) {
        if (listeCategorie[i]['quantity'] > 0) {
            availableproduct.push(listeCategorie[i]);
        }
    }
    return availableproduct;
}

let liste_filtered = cherche('car');
liste_filtered = available(liste_filtered);


const input = document.getElementById("input");
input.a