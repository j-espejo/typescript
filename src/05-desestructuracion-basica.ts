interface IPlayerMusic {
  volume: number;
  second: number;
  song: string;
  detail: IDetail;
}

interface IDetail {
  author: string;
  year: number;
}

const player: IPlayerMusic = {
  volume: 100,
  second: 36,
  song: "One",
  detail: {
    author: "Metallica",
    year: 1988,
  },
};

//destructuring
const { volume, second, song, detail } = player;
const { author, year } = detail;

// console.log("El volumen actual de: ", volume);
// console.log("El segundo actual de: ", second);
// console.log("La canción actual de: ", song);
// console.log("El autor es: ", author);
// console.log("El año es: ", year);

// destructuring Arrays

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = dbz;

// console.log("Personaje 1:", p1);
// console.log("Personaje 2:", p2);
console.log("Personaje 3:", p3);
