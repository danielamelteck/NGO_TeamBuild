import express from 'express';

const app = express () ;
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello from express!');
})

app.get('/daniela', (req, res) => {
    res.send('This is daniela page!');
})

app.get('/santiago', (req, res) => {
    res.send('This is santiagos page!');
})



app.listen(port, () => {
  console.log(`Server running at http://: ${port}/`);
});