///object

function Song(name,artist,year) {
 this.name = name;
 this. artist = artist;
 this.year = year;
}

let Song1 = new Song( 'ae dil hai mushkil',  'Arijit Singh', '2018');
let Song2 =  new Song ('mann','udit narayan','1995');

console.log(typeof Song1);
console.log(typeof Song2);

console.log(Song1);
console.log(Song2);