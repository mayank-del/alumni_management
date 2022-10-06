'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
    event_name: DataTypes.STRING,
    event_date: DataTypes.DATE,
    event_time: DataTypes.STRING,
    venue: DataTypes.STRING,
    event_desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};