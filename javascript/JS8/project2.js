const adj = {
    "1": "crazy",
    "2": "amazing",
    "3": "fire"
};

const shop = {
    "1": "engine",
    "2": "food",
    "3": "garment"
};

const anoth = {
    "1": "bros",
    "2": "hub",
    "3": "limited"
};

let a = Math.floor(Math.random() * 3) + 1;
let b = Math.floor(Math.random() * 3) + 1;
let c = Math.floor(Math.random() * 3) + 1;

console.log(`The business name should be ${adj[a]} ${shop[b]} ${anoth[c]}`);