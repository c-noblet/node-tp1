'use strict';
const {
  v4: uuidv4
} = require('uuid');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    const data = [{
      id: uuidv4(),
      firstname: 'Bob',
      lastname: `Doe`,
      email: `bob.doe@mail.com`,
      username: `b-doe`,
      github: `https://github.com/b-doe`,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    queryInterface.bulkInsert('Users', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
