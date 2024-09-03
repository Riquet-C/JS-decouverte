// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);

// Creation de mon équipe
var team = {
    players: [
        {
            firstName: "Pablo",
            lastName: "Sanchez",
            age: 25
        }
    ],
    games: [
        {
            opponent: "Broncos",
            teamPoints: 40,
            opponentPoints: 25,
        }
    ],
}

//ajout d'un joueur
function addPlayer(firstName, lastName, age) {
    team["players"].push({firstName: firstName, lastName: lastName, age: age});
}

//ajout d'un match
function addGames(opponent, teamPoints, opponentPoints) {
    team["games"].push({opponent: opponent, teamPoints: teamPoints, opponentPoints: opponentPoints});
}

//appel fonction ajout d'un joueur et d'un match
addPlayer("Travis", "Kelce", 28);
addGames("Kansas City Chiefs", 85, 50)

addPlayer("Joueur 2", "Name 2", 28);
addGames("Team 2", 59, 60)

addPlayer("Joueur 3", "Name 3", 58);
addGames("Team 3", 48, 28)

addPlayer("Joueur 4", "Name 4", 45);
addGames("Team 4", 12, 32)

addPlayer("Joueur 5", "Name 5", 18);
addGames("Team 5", 4, 25);

//affichage console des joueurs et des matchs
console.log(team.players);
console.log(team.games);
console.log(team.games.teamPoints);

// Calculs des points de l'équipe
function sumTeamPoint() {
    let totalPointTeam = 0;
    for (let i = 0; i < team.games.length; i++) {
        totalPointTeam += team.games[i].teamPoints;
    }
    return totalPointTeam;
}

console.log("Nombre total de point de l'équipe: " + sumTeamPoint());

// Calculs de la moyenne des points des opposants
function averageOpponentPoint() {
    let totalPointOpponent = 0;
    for (let i = 0; i < team.games.length; i++) {
        totalPointOpponent += team.games[i].opponentPoints;
    }
    totalPointOpponent = totalPointOpponent / team.games.length;
    return totalPointOpponent;
}

console.log("Moyenne des points des opposants: " + averageOpponentPoint()); /* avec virgule */
console.log("Moyenne des points des opposants: " + averageOpponentPoint().toFixed(2)); /* s2 chiffres aprés la virgule */

// Trouver le joueur le plus agé
function findTheOlder() {
    let olderPlayers = [];
    for (let i = 0; i < team.players.length; i++) {
        if (i > 0 && team.players[i].age > team.players[i - 1].age) {
            olderPlayers = [team.players[i].firstName, team.players[i].lastName, team.players[i].age];
        }
    }
    return olderPlayers;
}

console.log("le joueur le plus agé est: " + findTheOlder() + " ans");

// trier par ordre alphabétique
let sortPlayer;

sortPlayer = team.players.sort(function compare(a, b) {
    if (a.firstName < b.firstName)
        return -1;
    if (a.firstName > b.firstName)
        return 1;
    return 0;
});

console.log(sortPlayer);