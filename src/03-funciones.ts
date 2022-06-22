/*
    ===== Código de TypeScript =====
*/
// tipo de retorno tipo number
function add(a: number, b: number): number {
  return a + b;
}

const addArrow = (a: number, b: number): number => {
  return a + b;
};

function multiply(a: number, b?: number, base: number = 2): number {
  return a * base;
}

interface ICharacterLOR {
  name: string;
  lp: number;
  showLp: () => void;
}

function healing(character: ICharacterLOR, healingX: number): void {
  character.lp += healingX;
}

const newCharacter: ICharacterLOR = {
  name: "Dr Strange",
  lp: 50,
  showLp() {
    console.log("Puntos de vida: ", this.lp);
  },
};

healing(newCharacter, 20);

newCharacter.showLp();
