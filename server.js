const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false }));

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js');
const PORT = 3000;


app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res) => res.status(404).send('<h1>Page not found!</h1>'));

app.listen(PORT, () => console.log(`Port: ${PORT}`))