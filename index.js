import morgan from 'morgan';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.post('/sendemail', (req, res) => {
    console.log(req.body);
    res.send({ message: 'ok'});
});

app.listen('3000', () => {
    console.log("Server is on port 3000")
});