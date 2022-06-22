/*
    ===== Código de TypeScript =====
*/

/*
 Decorador sirve para cambiar las clases en el momento que son definidas.
 Extiende las funcionalidades
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new Property";
    hello = "override";
  };
}

// se añade propiedades de classDecorator
@classDecorator
class MySuperClass {
  public myProperty: string = "ABC123";

  print() {
    console.log("Hola Mundo");
  }
}

console.log(MySuperClass);

// Los decoradores se crean antes de la instancia
const myClass = new MySuperClass();

console.log(myClass.myProperty);
