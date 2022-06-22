/*
    ===== Código de TypeScript =====
*/

// skills arreglo tipo string
let skills: string[] = ["Bash", "Counter", "Healing"];

//interface
interface ICharacter {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const character: ICharacter = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter", "Healing"],
};

character.hometown = "New York";
console.table(character);
