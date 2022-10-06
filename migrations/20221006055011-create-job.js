'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      job_title: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      skills_req: {
        type: Sequelize.STRING
      },
      edu_req: {
        type: Sequelize.STRING
      },
      expr_req: {
        type: Sequelize.STRING
      },
      salary_given: {
        type: Sequelize.STRING
      },
      jobpost_status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Jobs');
  }
};