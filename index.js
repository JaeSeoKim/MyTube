import express from "express"; //web server engin
//express middleware 
import morgan from "morgan"; //web logger
import helmet from "helmet"; //web secure engin
import bodyParser from "body-parser"; //for parsing body ex> POST, GET
import cookieParser from "cookie-parser" //for parsing cookie 

const app = express();
const PORT = 3000;
const handleListening = () =>
  console.log(`listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("hello");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.get('/', handleHome);

app.get('/profile', handleProfile);

app.listen(PORT, handleListening);