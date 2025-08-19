const marvel_hero = ["Tho", "Ironmen", "Spiderman"]
const bolly_Hero = ["salman khan", "varun dhawan", "ayushman khurana", "shahrukh khan"]

//marvel_hero.push(bolly_Hero);
//console.log(marvel_hero)

//const allHeros = marvel_hero.concat(bolly_Hero)
//console.log(allHeros)

//const all_heros = [...marvel_hero, ...bolly_Hero]
//console.log(all_heros)

const new_array = [1, 2, 3, [4, 8, 9, [5, 4]], 8, 747, 59, 64, 851, [48, 95]]
const new_array1 = new_array.flat(Infinity)
console.log(new_array1)