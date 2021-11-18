import express from 'express';

const port = 3001;
const app = express();

app.get('/', (_request, response) => {
  response.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
