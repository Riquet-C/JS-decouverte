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
    return `
        <div class="card m-2 border-success">
            <div class="card-body">
                <h5 class="card-title">${objet.name || 'Nom indisponible'}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${type || 'Type indisponible'}</h6>
                <p class="card-text">${objet.description || ''}</p>
                <p class="card-text">${objet.price || 'Prix non disponible'}</p>
                <p class="card-text">${objet.quantity || 'Quantité non disponible'}</p>
            </div>
        </div>
    `
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

//affichage
// au chargement initial de la page
function start(data) {
    const productDiv = document.getElementById("mes_produits");
    productDiv.innerHTML = "";
    for (let categories of data) {
        let type = categories["type"];
        let items = categories["items"];
        for (let item of items) {
            productDiv.innerHTML += createCard(item, type)
        }
    }
}

start(jsonDatas);

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
            availableProduct.push(listeCategorie[i]);
            availableProduct["type"] = listeCategorie['type'];
        }
    }
    return availableProduct;
}


function categories(data) {
    const dropDownRecherche = document.getElementById("dropDownRecherche");
    dropDownRecherche.innerHTML = '';
    data.forEach(item => {
        dropDownRecherche.innerHTML += `<li><a class="dropdown-item" data-value="${item.type}">${item.type}</a></li>`;
    })
    document.querySelectorAll('#dropDownRecherche .dropdown-item').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelectorAll('#dropDownRecherche .dropdown-item').forEach(el => el.classList.remove('active'));
            this.classList.add('active');
            let recherche = this.getAttribute('data-value');
            updateResults(recherche);
        });
    });
}


categories(jsonDatas);

// si une recherche est faite
let recherche = document.getElementById("recherche");
const checkBox = document.getElementById('check');
const name = document.getElementById('name');
const priceUp = document.getElementById('priceCroissant');
const priceDown = document.getElementById('priceDecroissant');


checkBox.addEventListener("change", function () {
    let recherche = document.querySelector('.active')?.getAttribute("data-value");
    updateResults(recherche || "");
});

name.addEventListener("click", function () {
    let recherche = document.querySelector('.active')?.getAttribute("data-value");
    let result = cherche(recherche || "").sort((a, b) => a.name.localeCompare(b.name));
    display(result);
});

priceUp.addEventListener("click", function () {
    let recherche = document.querySelector('.active')?.getAttribute("data-value");
    let result = cherche(recherche || "").sort((a, b) => a.price - b.price);
    display(result);
});

priceDown.addEventListener("click", function () {
    let recherche = document.querySelector('.active')?.getAttribute("data-value");
    let result = cherche(recherche || "").sort((a, b) => b.price - a.price);
    display(result);
});


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
    localStorage.setItem("donnees", JSON.stringify(newProduct));
    //ajout à jsonDatas
    for (let i = 0; i < jsonDatas.length; i++) {
        if (type === jsonDatas[i].type) {
            jsonDatas[i].items.push(newProduct);

        }

        start(jsonDatas);
    }
})

function addLocalStorageToJson() {
    const donnees = localStorage.getItem("donnees");
    const type = document.getElementById("formType").value;
    const parsedDonnees = JSON.parse(donnees);
    for (let i = 0; i < jsonDatas.length; i++) {
        console.log(type)
        console.log(jsonDatas[i].items);
        if (type === jsonDatas[i].type) {
            jsonDatas[i].items = jsonDatas[i].items.concat(parsedDonnees);
            console.log(jsonDatas[i].items);
        }
    }
    return jsonDatas;
}

addLocalStorageToJson()