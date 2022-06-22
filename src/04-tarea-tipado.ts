/*
    ===== Código de TypeScript =====
*/

interface ISuperHero {
  name: string;
  age: number;
  direction: IDirection;
  showDirection: () => string;
}

interface IDirection {
  street: string;
  country: string;
  city: string;
}

const superHero: ISuperHero = {
  name: "Spiderman",
  age: 30,
  direction: {
    street: "Main St",
    country: "USA",
    city: "New York",
  },

  showDirection() {
    return (
      this.name + ", " + this.direction.city + ", " + this.direction.country
    );
  },
};

const direction = superHero.showDirection();

console.log(direction);
