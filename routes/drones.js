const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  Drone
    .find() 
    .then(dronesFromApi => {
      console.log(dronesFromApi)
    res.render("../views/drones/list.hbs",{ dronesFromApi });
    })

   .catch(error => console.log(error));

  }); 



router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs');
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body);
  const { name, propellers, maxSpeed } = req.body;

  Drone.create({ name, propellers, maxSpeed })
    /*.then(droneFromDB => console.log(`New drone created: ${droneFromDB.name}.` */
    .then(() => res.redirect('/drones'))
    .catch(error => res.redirect('/drones/create'));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params;
  console.log(id);

  Drone.findById(id)
    .then(droneToEdit => {

      console.log("hola", droneToEdit);
      res.render('drones/update-form.hbs', {drone: droneToEdit});
    })

    .catch(error => next(error));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
 // const { id, name, propellers, maxSpeed } = req.body;

 // const { id } = req.params;
 // console.log(id);
 
 // Drone.findByIdAndUpdate({ id, name, propellers, maxSpeed })
    // .then(bookFromDB => console.log(`New book created: ${bookFromDB.title}.`))
    .then(() => {
      const { id } = req.params;
      const updates = req.body;

      const result = await Drone.findByIdAndUpdate()

      res.redirect('/drones')
    })

    .catch(error => next(error));
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
