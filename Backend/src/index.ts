import cors from 'cors';
import express from 'express';
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors( { origin: '*' }));

app.get('/', (req, res) => {
  res.send('Api is running');
});

// Routes


app.listen(PORT, () => {
    console.log('Server is running on port 3000');
});