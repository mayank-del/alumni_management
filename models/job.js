'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    job_title: DataTypes.STRING,
    company: DataTypes.STRING,
    start_date: DataTypes.DATE,
    skills_req: DataTypes.STRING,
    edu_req: DataTypes.STRING,
    expr_req: DataTypes.STRING,
    salary_given: DataTypes.STRING,
    jobpost_status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};