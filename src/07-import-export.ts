/*
    ===== Código de TypeScript =====
*/

import { calcIVA, IProduct } from "./06-desestructuracion-funcion";

const shoppingCart: IProduct[] = [
  {
    desc: "Phone 1",
    price: 200,
  },
  {
    desc: "Phone 2",
    price: 150,
  },
];

const [total, iva] = calcIVA(shoppingCart);

console.log("Total: ", total);
console.log("IVA: ", iva);
