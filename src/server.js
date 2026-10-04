import express from "express"
import cors from "cors"
import helmet from "helmet";
import "dotenv/config";

const app = express();
const port = process.env.PORT;


app.use( cors());
app.use(helmet());

app.use((req,res,next) => {
  console.log(`Time`, new Date().toLocaleString(), new Date().getFullYear(),);
  next();
})


app.get(`/`, (req, res) => {
  res.status(200).json({ message: 'Hello, World!' })
});
app.get(`/produkts`, (req, res) => { res.status(200).json({}) });

app.get(`/products/:productId`, (req, res) => {
  const {productId }=req.params
  res.status(200).json({ id: productId})
});




app.use((req, res) => {
  res.status(200).json({ message: `nema` })
});

app.use((error, req, res) => {
const isproduction = process.env.NODE_ENV === `production`
   res.status(500).json({error:isproduction ? error.message:error.stack})
 });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})