const bcrypt = require('bcryptjs');
const admin = [
    {
        name: "admin1",
        email: "admin1@gmail.com",
        password: bcrypt.hashSync('admin'),
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        name: "admin2",
        email: "admin2@gmail.com",
        password: bcrypt.hashSync('admin'),
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
    },

]

module.exports = admin;