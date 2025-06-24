const express = require('express');
const cors = require('cors');
const leadRoutes = require('./apis/routes/lead.route');


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1",leadRoutes)


app.get('/api/health', (req, res) => {
    res.json({ message: 'Backend server is running', status: 'OK' });
});

module.exports = app;