import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

// -------- app.use --------

app.use((req, res, next) => {
  console.log("1. middleware");
  next();
});

app.use((req, res, next) => {
  console.log("2. middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.use("/all", (req, res, next) => {
  console.log("Middleware on endpoint1");
  next();
});

app.use("/endpoint2", (req, res, next) => {
  console.log("Middleware on endpoint2");
  next();
});

// -------- end app.use --------

app.get("/", (req, res) => {
  res.json("Got you!");
});

app.get("/sum", (req, res) => {
  const sum = Number(req.query.num1) + Number(req.query.num2);
  res.json({ result: sum });
});

app.get("/sub", (req, res) => {
  const sub = Number(req.query.num1) - Number(req.query.num2);
  res.json({ result: sub });
});

app.get("/mul", (req, res) => {
  const sum = Number(req.query.num1) * Number(req.query.num2);
  res.json({ result: sum });
});

app.get("/div", (req, res) => {
  const sum = Number(req.query.num1) / Number(req.query.num2);
  res.json({ result: sum });
});

app.get("/all", (req, res) => {
  const sum = Number(req.query.num1) + Number(req.query.num2);
  const sub = Number(req.query.num1) - Number(req.query.num2);
  const mul = Number(req.query.num1) * Number(req.query.num2);
  const div = Number(req.query.num1) / Number(req.query.num2);
  res.json({ sum: sum, sub: sub, mul: mul, div, div });
});

app.get("/allHTML", (req, res) => {
  const sum = Number(req.query.num1) + Number(req.query.num2);
  const sub = Number(req.query.num1) - Number(req.query.num2);
  const mul = Number(req.query.num1) * Number(req.query.num2);
  const div = Number(req.query.num1) / Number(req.query.num2);
  res.send(
    `
    <h1>The results are:</1>
    <p>${req.query.num1} + ${req.query.num2} = ${sum}</p>
    <p>${req.query.num1} - ${req.query.num2} = ${sub}</p>
    <p>${req.query.num1} * ${req.query.num2} = ${mul}</p>
    <p>${req.query.num1} / ${req.query.num2} = ${div}</p>    
    `
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} ...`);
});
