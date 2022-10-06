const jwt = require('jsonwebtoken');
exports.generateToken = (id, userType="alumni") => {
    if (userType === "alumni")
        return jwt.sign({ id }, process.env.ALUMNI_SECRET_KEY, {expiresIn: '30d'})
    else
        return jwt.sign({ id }, process.env.ADMIN_SECRET_KEY, {expiresIn: '30d'})
}