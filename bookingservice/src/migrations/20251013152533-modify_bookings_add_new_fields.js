'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      "Bookings",
      'seats_no',{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:1
      }
    );
    await queryInterface.addColumn(
      "Bookings",
      'totalcost',{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:0
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.removeColumn('Bookings','seats_no');
     await queryInterface.removeColumn('Bookings','totalcost');
  }
};
