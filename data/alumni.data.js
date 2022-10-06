const bcrypt = require('bcryptjs');
const alumni = [
    {
        id: 2,
        alumni_name: "name",
        user_name: "text",
        register_number: "text1",
        password: bcrypt.hashSync('password'),
        dob: "2018-03-29",
        gender: "male",
        address: "address",
        mobile_number: 123,
        email_address: "email",
        passout_year: 12,
        company_name: "company",
        qualification: "bed",
        designation: "des",
        updatedAt: new Date(),
        createdAt: new Date(),
    }
]

module.exports = alumni;


