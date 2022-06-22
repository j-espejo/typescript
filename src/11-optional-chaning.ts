/*
    ===== Código de TypeScript =====
*/

interface IPassenger {
  name: string;
  children?: string[];
}

const passengerOne: IPassenger = {
  name: "Walter",
};

const passengerTwo: IPassenger = {
  name: "Skyler",
  children: ["Holly", "Flynn"],
};

function printChild(passenger: IPassenger): void {
  const countChildren = passenger.children?.length || 0;

  console.log(countChildren);
}

printChild(passengerOne);
