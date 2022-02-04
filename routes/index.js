import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello from express!');
})

router.get('/daniela', (req, res) => {
    res.send('This is daniela page!');
})

router.get('/santiago', (req, res) => {
    res.send('This is santiagos page!');
})

router.get('/karina', (req, res) => {
    res.send('This is karinas page!');
})


//export the router and make it available to app.js
export default router;