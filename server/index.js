import express from "express";
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
