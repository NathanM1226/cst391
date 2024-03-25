import { Request, Response } from 'express';
import { ResultSetHeader } from 'mysql2/promise';
import pool from './database';

class CarController {
  public async getAllCars(req: Request, res: Response): Promise<void> {
    try {
      const [rows] = await pool.query('SELECT * FROM cars');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error 1' });
    }
  }

  public async createCar(req: Request, res: Response): Promise<void> {
    const { make, model, year, miles, price } = req.body;

    try {
      await pool.query('INSERT INTO cars (make, model, year, miles, price) VALUES (?, ?, ?, ?, ?)', [make, model, year, miles, price]);
      res.json({ message: 'Car created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error 2' });
    }
  }

  public async updateCar(req: Request, res: Response): Promise<void> {
    const carId = req.params.id;
    const { make, model, year, miles, price } = req.body;
  
    try {
      const [result] = await pool.query('UPDATE cars SET make = ?, model = ?, year = ?, miles = ?, price = ? WHERE id = ?', [make, model, year, miles, price, carId]);
  
      if ((result as ResultSetHeader).affectedRows > 0) {
        res.json({ message: 'Car updated successfully' });
      } else {
        res.status(404).json({ message: 'Car not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error 3' });
    }
  }
  
  public async deleteCar(req: Request, res: Response): Promise<void> {
    const carId = req.params.id;
  
    try {
      const [result] = await pool.query('DELETE FROM cars WHERE id = ?', [carId]);
  
      if ((result as ResultSetHeader).affectedRows > 0) {
        res.json({ message: 'Car deleted successfully' });
      } else {
        res.status(404).json({ message: 'Car not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error 4' });
    }
  }
}

export default new CarController();
