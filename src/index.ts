/*
    ===== Código de TypeScript =====
*/

interface IProduct {
  desc: string;
  price: number;
}

const phone: IProduct = {
  desc: "Nokia Phone",
  price: 150,
};

const tablet: IProduct = {
  desc: "Ipad Tablet",
  price: 350,
};

function calcIVA(products: IProduct[]): [number, number] {
  let total = 0;
  //destructuring arguments
  products.forEach(({ price }) => (total += price));
  return [total, total * 0.19];
}

const articles = [phone, tablet];

//destructuring arrays
const [total, iva] = calcIVA(articles);

console.log("Total articles:", total);
console.log("IVA articles:", iva);
