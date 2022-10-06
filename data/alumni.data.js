const bcrypt = require('bcryptjs');
const alumni = [
    {
        id: 1,
        name: "name",
        username: "text",
        regno: "text1",
        password: bcrypt.hashSync('password'),
        dob: "2018-03-29",
        gender: "male",
        address: "address",
        mobile: 123,
        email: "email",
        passoutYear: 12,
        company: "company",
        qualification: "bed",
        designation: "des",
        updatedAt: new Date(),
        createdAt: new Date(),
    }
]

module.exports = alumni;


