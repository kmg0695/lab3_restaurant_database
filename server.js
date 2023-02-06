import Express from "express";
import mongoose from "mongoose";
import RestaurantRoutes from "./routes/restaurantRoutes.js";

const app = Express();
app.use(Express.json());

mongoose
  .set("strictQuery", true)
  .connect(
    "mongodb+srv://fs2:passwordRedacted@restaurants.kcfgklx.mongodb.net/Labs3?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((success) => {
    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log("error connecting to mongoDB");
  });

app.use("/", RestaurantRoutes);

app.listen(4000, () => console.log("server running"));
