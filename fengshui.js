'use strict';
console.log('Hello! I am a Chinese Calendar');

const arrHeaven = ["bin", "din", "wu", "dzi", "gen", "sin", "ren", "gui", "Dzja", "i"];

const pathIeroglif = [];

for(let i in arrHeaven){
pathIeroglif.push(`./img/${arrHeaven[i]}.svg`);
}

console.log(pathIeroglif);


