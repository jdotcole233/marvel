import { mutate, mutateWithForEach } from "./marvelousmethods.js";

const human = {
    name: "Danielson Chinye",
    age: 35,
    salary: 7000,
    currency: "USD"
};


// Array methods to note when programming 
// Pop, Push


const cars = ["Audi", "BMW", "Toyota"];
console.log("cars before ", cars);

// console.log(mutate(cars));

console.log(mutateWithForEach(cars));
// cars.forEach((value, index) => {
//      const msg = `i love ${value}`;
//      cars[index] = msg.toLowerCase();
// });

// console.log("Cars after ", cars);