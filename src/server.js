import express from "express"
import cors from "cors"
import helmet from "helmet";
import "dotenv/config";
import { connectMongoDB } from "./db/connectMongoDB.js";
import { notFoundHandler } from "./middleware/notFoundHandler.js";
import { errorHandler } from "./middleware/errorHandler.js";
import studentsRoutes from "./routes/studentsRoutes.js";
import {errors } from "celebrate";

const app = express();
const port = process.env.PORT 

app.use( cors());
app.use(helmet());
app.use(express.json());

app.use((req,res,next) => {
  console.log(`Time`, new Date().toLocaleString(), new Date().getFullYear(),);
  next();
})


app.use(studentsRoutes);
app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})