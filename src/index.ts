/*
    ===== Código de TypeScript =====
*/

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

console.log("El volumen actual de: ", volume);
console.log("El segundo actual de: ", second);
console.log("La canción actual de: ", song);
console.log("El autor es: ", author);
console.log("El año es: ", year);
