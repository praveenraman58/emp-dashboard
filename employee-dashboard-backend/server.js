const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://praveendevelop01:dashboard@dashboard.jyffe.mongodb.net/?retryWrites=true&w=majority&appName=dashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Routes
app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
