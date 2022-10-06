const bcrypt = require('bcryptjs');
const item = {
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
const p = JSON.stringify(item)
console.log(p)
console.log(JSON.parse(p))