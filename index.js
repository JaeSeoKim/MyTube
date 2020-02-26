import express from "express";
const app = express();

const PORT = 3000;


const handleListening = () =>
  console.log('Listening on : http://localhost:${PORT}');

const middleware = (req, res, next) => {
  console.log(req.url);
  next();
};

const handleHome = (req,res) => res.send("hello");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(middleware);

app.get('/', handleHome);

app.get('/profile',handleProfile);

app.listen(PORT, handleListening);