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
for (let categories of jsonDatas) {
    let type = categories["type"];
    let items = categories["items"];
    for (let item of items) {
        item["type traduit"] = tradType[type];
    }
}

//creation card pour produit
function createCard(objet, type) {
    let descriptionHtml = '';
    if (objet['description']) {
        descriptionHtml = '<li> Description: ' + objet['description'] + '</li>';
    }

    return '<h2>' + objet['name'] + '</h2>' +
        '<ul>' +
        '<li> Type: ' + type + '</li>' +
        descriptionHtml +
        '<li> Prix: ' + objet['price'] + '</li>' +
        '<li> Quantité disponible: ' + objet['quantity'] + '</li>' +
        '</ul>';
}

// function affichage
function display(elements_to_display) {
    const productDiv = document.getElementById("mes_produits");
    productDiv.innerHTML = "";
    let type = elements_to_display["type"];
    elements_to_display.forEach((article) => {
        productDiv.innerHTML += createCard(article, type)
    })
}

function updateResults(recherche) {
    const productDiv = document.getElementById("mes_produits");
    let result = cherche(recherche);
    let type = result["type"];

    productDiv.innerHTML = "";

    if (checkBox.checked) {
        result = available(result);
    }
    display(result)
}

// function recherche et dispo
function cherche(query) {
    let categorie = [];
    //boucle pour afficher les produits de la catégorie renseigner
    for (let i = 0; i < jsonDatas.length; i++) {
        if (jsonDatas[i]['type'].includes(query)) {
            categorie = categorie.concat(jsonDatas[i]["items"]);
            categorie["type"] = jsonDatas[i]['type'];
        }
    }
    return categorie
}

function available(listeCategorie) {
    let availableProduct = [];
    for (let i = 0; i < listeCategorie.length; i++) {
        if (listeCategorie[i]['quantity'] > 0) {
            console.log(listeCategorie)
            availableProduct.push(listeCategorie[i]);
            availableProduct["type"] = listeCategorie['type'];
        }
    }
    return availableProduct;
}

//affichage
// au chargement initial de la page
function start(data) {
    const productDiv = document.getElementById("mes_produits");
    for (let categories of data) {
        let type = categories["type"];
        let items = categories["items"];
        for (let item of items) {
            productDiv.innerHTML += createCard(item, type)
        }
    }
}

start(jsonDatas);


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
    // recup les données
    const name = document.getElementById("formName").value;
    const type = document.getElementById("formType").value;
    const description = document.getElementById("formDescription").value;
    const price = parseInt(document.getElementById("formPrice").value);
    const quantity = parseInt(document.getElementById("formQuantity").value);

    // crée produit
    const newProduct = {
        "name": name, "description": description, "price": price, "quantity": quantity, "contact": {
            "lastName": "Dubois",
            "firstName": "Martin",
            "address": "1 Grande Rue 74000 Annecy"
        }
    }

    //ajout à jsonDatas
    for (let i = 0; i < jsonDatas.length; i++) {
        if (type === jsonDatas[i].type) {
            jsonDatas[i].items.push(newProduct);
        }
        console.log(jsonDatas[i]);
    }
})