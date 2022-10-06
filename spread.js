const { bgBlack } = require("colors")

const g1 = [
    "Stefania",
    "Lina",
    "Ronald"
]

const g2 = [
    "Maria",
    "Daniela",
    "Kevin"
]

const g3 = [
    "Juan",
    ...g1,
    "Camilo",
    ...g2
]

console.log(g3)