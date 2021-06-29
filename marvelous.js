import { mutate, mutateWithForEach } from "./marvelousmethods.js";

const human = {
    name: "Danielson Chinye",
    age: 35,
    salary: 7000,
    currency: "USD"
};


// Array methods to note when programming 
// Pop, Push, forEach, map, filter


const cars = ["Audi", "BMW", "Toyota"];
const carmodels = [
  { id: 1, make: "Audi", model: "A11" },
  { id: 2, make: "Bmw", model: "x6" },
  { id: 3, make: "Bmw", model: "m6" },
  { id: 4, make: "Bmw", model: "m3" },
  { id: 5, make: "Ford", model: "Focus" },
  { id: 6, make: "Range Rover", model: "Hse" },
  { id: 7, make: "Range Rover", model: "Sports" },
  { id: 8, make: "Rolls Royce", model: "Phantom" },
];


const cars_ = carmodels.filter(car => car.make === "Bmw");

console.log(cars_);



// const model_ = data => data.model;
// const make_ = data => data.make.toUpperCase();

// function name_make (data) {
//     return data.make.toLowerCase();
// }

// const anony_make = function (data) {
//     return data.id
// };

// const make_model = car => `${car.make} => ${car.model}`;

// const

// console.log(carmodels);
// const model = carmodels.map(car => `${car.make} => ${car.model}`);
// console.log(model);


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