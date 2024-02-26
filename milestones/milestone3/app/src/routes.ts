import express, { Router } from 'express';
import CarController from './controller';

const router: Router = express.Router();

router.get('/cars', CarController.getAllCars);
router.post('/cars', CarController.createCar);
router.put('/cars/:id', CarController.updateCar);
router.delete('/cars/:id', CarController.deleteCar);

export default router;
