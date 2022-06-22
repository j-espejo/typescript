/*
    ===== Código de TypeScript =====
*/

// las clases crean instancias
// en interface no se puede implementar métodos sólo se definen
class Hero {
  // alterEgo: string;
  // age: number;
  // realName: string;

  constructor(
    public alterEgo: string,
    public age?: number,
    public realName?: string
  ) {}
}

const ironman = new Hero("Ironman", 45, "Tony");

console.log(ironman);
