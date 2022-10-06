'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      alumni_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      register_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dob: {
        type: Sequelize.DATE,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mobile_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email_address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      passout_year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qualification: {
        type: Sequelize.STRING,
        allowNull: false
      },
      designation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      isApproved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};