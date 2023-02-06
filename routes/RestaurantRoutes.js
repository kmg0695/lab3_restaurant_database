import Express from "express";
import { RestaurantModel } from "../models/Restaurants.js";

const app = Express.Router();

app.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await RestaurantModel.find().sort({
      restaurant_id: req.query.sortBy.toLowerCase() === "desc" ? -1 : 1,
    });
    res.send(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/restaurants/cuisine/:cuisine", async (req, res) => {
  try {
    const { cuisine } = req.params;
    const restaurants = await RestaurantModel.find({ cuisine: cuisine });
    res.send(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/restaurants/Delicatessen", async (req, res) => {
  try {
    const restaurants = await RestaurantModel.find(
      {
        cuisine: "Delicatessen",
        city: { $ne: "Brooklyn" },
      },
      {
        address: 1,
        name: 1,
        cuisine: 1,
        city: 1,
      }
    ).sort({ name: 1 });
    res.send(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default app;
