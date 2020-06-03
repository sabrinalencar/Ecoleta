import express from 'express'; // não precisa de ./ pois vem no node modules
import path from 'path';
import routes from './routes';

const app = express();

app.use(express.json());// forma do express conseguir entender json
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.listen(3333); // porta por padrão sempre executada pro backend