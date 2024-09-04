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
// for (let item of jsonDatas["type"]) {
//     item["type traduit"] = tradType[item["type"]];
// }

//creation card pour produit
function createCard(objet) {
    return '<h2>' + objet['name'] + '</h2>' +
        '<ul>' +
        '<li> Type: ' + objet['type'] + '</li>' +
        '<li> Description: ' + objet['description'] + '</li>' +
        '<li> Prix: ' + objet['price'] + '</li>' +
        '<li> Quantité disponible: ' + objet['quantity'] + '</li>' +
        '</ul>';
}

// function affichage
function display(elements_to_display) {
    const productDiv = document.getElementById("mes_produits");
    productDiv.innerHTML = "";
    for (let product of elements_to_display) {
        productDiv.innerHTML += createCard(product.items)
    }
}

function updateResults(recherche) {
    let result = cherche(recherche);
    if (checkBox.checked) {
        result = available(result);
    }
    display(result);
}

// function recherche et dispo
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

function available(listeCategorie) {
    let availableProduct = [];
    for (let i = 0; i < listeCategorie.length; i++) {
        if (listeCategorie[i]['quantity'] > 0) {
            availableProduct.push(listeCategorie[i]);
        }
    }
    return availableProduct;
}


//affichage
// au chargement initial de la page
display(jsonDatas);

// si une recherche est faite
const input = document.getElementById("input");
input.addEventListener("change", function (event) {
    let recherche = input.value;
    updateResults(recherche);
});

// si checkbox modifié
const checkBox = document.getElementById('check');
checkBox.addEventListener("change", function (event) {
    let recherche = input.value;
    updateResults(recherche);
})

//tri par nom
const name = document.getElementById('name');
name.addEventListener("click", function (event) {
    let recherche = input.value;
    let result = cherche(recherche).sort((a, b) => a.name.localeCompare(b.name));
    display(result);
})

// tri par prix croissant
const priceUp = document.getElementById('priceCroissant');
priceUp.addEventListener("click", function (event) {
    let recherche = input.value;
    let result = cherche(recherche).sort((a, b) => a.price - b.price)
    display(result);
})

// tri par prix décroissant
const priceDown = document.getElementById('priceDecroissant');
priceDown.addEventListener("click", function (event) {
    let recherche = input.value;
    let result = cherche(recherche).sort((a, b) => b.price - a.price)
    display(result);
})

//Ajout produit à la liste
const form = document.getElementById('form');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("formName").value;
    const type = document.getElementById("formType").value;
    const description = document.getElementById("formDescription").value;
    const price = parseInt(document.getElementById("formPrice").value);
    const quantity = parseInt(document.getElementById("formQuantity").value);
    jsonDatas.push({"name" : name, "type": type, "description" : description, "price" : price, "quantity" : quantity});
    display(jsonDatas);
})