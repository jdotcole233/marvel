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
cars.forEach((value, index) => {
     cars[index] = value.toLowerCase();
});

console.log("Cars after ", cars);