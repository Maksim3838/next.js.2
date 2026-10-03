import express from "express"

const app = express();
const PORT = 3000;

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

app.get(`/cars`, (req, res) => { res.status(200).json({}) })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})