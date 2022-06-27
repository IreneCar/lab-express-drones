// Iteration #1
const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];



// aqui insertaremos la data a la BD
// los seeds no se conectan con nuestro servidor

const Drone = require("../models/Drone.model");

// insertarla en la BD
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/lab-express-drones")
  .then((response) => {
    console.log("conectados a la Dase de Datos");

    return Drone.insertMany(drones);
  })
  .then((response) => {
    console.log("Drones agregados correctamente");
    // hacer la desconeccion
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });

