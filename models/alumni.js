'use strict';
const bcrypt = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alumni extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alumni.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    regno: DataTypes.STRING,
    password: DataTypes.STRING,
    dob: DataTypes.STRING,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    mobile: DataTypes.NUMBER,
    email: DataTypes.STRING,
    passoutYear: DataTypes.NUMBER,
    company: DataTypes.STRING,
    qualification: DataTypes.STRING,
    designation: DataTypes.STRING,
    isApproved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Alumni',
  });

  Alumni.addHook('beforeCreate', async (user, option) => {
    if (!user.changed('password')) {
      next()
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  })

  Alumni.prototype.matchPassword = function (enteredPassword) {
    return bcrypt.compareSync(enteredPassword, this.password)
  }
  return Alumni;
};