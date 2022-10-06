const dotenv = require('dotenv');
dotenv.config();
const colors = require('colors');
const express = require('express');
const app = express();
const {notFound, errorHandler} = require('./middleware/errorMiddleware')
const alumniRoutes = require('./routes/user.routes');

app.use(express.json());

app.use('/api/alumni',alumniRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))
