import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  building: { type: String },
  street: { type: String },
  zipcode: { type: String },
});

const RestaurantSchema = new mongoose.Schema({
  address: {
    type: AddressSchema,
    required: true,
  },
  city: { type: String },
  cuisine: { type: String },
  name: { type: String },
  restaurant_id: { type: String },
});

export const RestaurantModel = mongoose.model(
  "Restaurants",
  RestaurantSchema,
  "Restaurants"
);
