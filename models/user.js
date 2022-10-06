'use strict';
const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
    }
  }
  User.init({
    alumni_name: DataTypes.STRING,
    user_name: DataTypes.STRING,
    register_number: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    mobile_number: DataTypes.NUMBER,
    email_address: DataTypes.STRING,
    passout_year: DataTypes.NUMBER,
    company_name: DataTypes.STRING,
    qualification: DataTypes.STRING,
    designation: DataTypes.STRING
  },
    {
      sequelize,
      modelName: 'User',
    });

  User.addHook('beforeCreate', async (user, options) => {
    if (!user.changed('password')) {
      next()
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  })

  User.prototype.matchPassword = function (enteredPassword) {
    return bcrypt.compareSync(enteredPassword, this.password)
  }

  return User;
};