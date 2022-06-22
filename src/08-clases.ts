/*
    ===== Código de TypeScript =====
*/

class NormalPerson {
  constructor(public name: string, public direction: string) {}
}

// extendemos NormalPerson
// super: llama al constructor de la clase que extiende
class Hero extends NormalPerson {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, "New York, USA");
  }
}

const ironman = new Hero("Ironman", 45, "Tony");

console.log(ironman);
