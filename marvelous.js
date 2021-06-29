import { mutate, mutateWithForEach } from "./marvelousmethods.js";

const human = {
    name: "Danielson Chinye",
    age: 35,
    salary: 7000,
    currency: "USD"
};


// Array methods to note when programming 
// Pop, Push, forEach, map


const cars = ["Audi", "BMW", "Toyota"];
const carmodels = [
  { id: 1, make: "Audi", model: "A11" },
  { id: 2, make: "Bmw", model: "x6" },
  { id: 3, make: "Ford", model: "Focus" },
  { id: 4, make: "Range Rover", model: "Hse" },
  { id: 5, make: "Rolls Royce", model: "Phantom" },
];


console.log(carmodels);
const model = carmodels.map(car => car.model);
console.log(model);


// console.log("cars before ", cars);

// const new_cars = cars.map(value => value.toUpperCase());

// console.log(new_cars);
// console.log(cars);

// console.log(mutate(cars));

// console.log(mutateWithForEach(cars));
// cars.forEach((value, index) => {
//      const msg = `i love ${value}`;
//      cars[index] = msg.toLowerCase();
// });

// console.log("Cars after ", cars);