let products = [
  {
    id: 1,
    name: "firman",
    description: "generator",
    price: "200.000 naira",
    inStock: true,
    },
  {
    id: 2,
    name: "binatone",
    description: "generator",
    price: "100.000 naira",
    inStock: false,
    },
  {
    id: 3,
    name: "corolla",
    description: "generator",
    price: "150.000 naira",
    inStock: true,
    },
  {
    id: 4,
    name: "thermocool",
    description: "generator",
    price: "200.000 naira",
    inStock: true,
    },
  {
    id: 5,
    name: "toyota camry 2018",
    description: "vehicle",
    price: "1.8 million naira",
    inStock: false,
    },
  {
    id: 6,
    name: "mercedis s550",
    description: "luxury vehicle",
    price: "350, 000.usd",
    inStock: true,
    },
  {
    id: 7,
    name: "toyota venza",
    description: "vehicle",
    price: " 7 million naira",
    inStock: true,
    },
  {
    id: 8,
    name: " lg thin iq 55 cm",
    description: "",
    price: "650,000 naira",
    inStock: true,
    },
 {
   id: 9,
   name: "apple iphone x",
   description: "mobile phone",
   price: "180,000 naira",
   inStock: true,
  },

 {
   id: 10,
   name: "apple iphone 8plus",
   description: "mobile phone",
   price: "130,000 naira",
   inStock: false,
   },
 {
   id: 11,
   name: "apple iphone 8",
   description: "mobile phone",
   price: "100,000 naira",
   inStock: true,
   },
  {
   id: 12,
   name: "apple iphone 7plus",
   description: "mobile phone",
   price: "85,000 naira",
   inStock: false,
  },

  {
   id: 13,
   name: "apple iphone 7",
   description: "mobile phone",
   price: "70,000 naira",
   inStock: false,
   },
 
  {
    id: 14,
    name: "apple iphone 6s",
    description: "mobile phone",
    price: "50,000 naira",
    inStock: false,
    },

  {
    id: 15,
    name: "apple iphone 6",
    description: "mobile phone",
    price: "45,000 naira",
    inStock: true,
    },
]


// mapping through the console to get the product names

const product = products.map(product => console.log(` Name of product:
 ${product.name}`));



//mapping through the console to get the product names and prices

const productNameAndPrice = products.map(product => console.log(`Name of product:
${product.name}
Price: ${product.price}`));



//using filter() to get products that are in stock

const productsInStock = products.filter((productsInStock) => productsInStock.inStock === true);
console.log(productsInStock);


//using filter() to get products that are not in stock

const productNotInStock = products.filter(
  (productNotInStock) => productNotInStock.inStock !== true
);
console.log(productNotInStock);
