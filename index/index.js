const stock = require('../controller/controller');


const { add, display, findById, findMany, remove, update, updateManyElements } = stock;

let newItem = {
    name: "Vanilla Powder",
    measurementUnit: "pcs",
    amount: 2,
    pricePerUnit: 2000.0,
};

add(newItem);


update(2, "amount", 4);
update(2, "name", "Pepper");


let item1 = {
    amount: 7,
    pricePerUnit: 5500.0,
} 
updateManyElements(3, item1);

let item2 = {
    name: "Mangoes",
    measurementUnit: "pcs",
} 

display();


remove(2);
