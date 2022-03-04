const express = require('express');
const app = express();
const port = 5002;
const cors = require('cors');
const customerList = require('./assets/customer_list')
app.use(cors({
    origin: '*'
}));
app.get('/', (req, res)=>{
    res.send("hellow world");
});
app.get('/customer-list', (req, res) => {
    res.json(customerList);
});
app.listen(port, ()=>{
    console.log("App listening to port " + port);
});