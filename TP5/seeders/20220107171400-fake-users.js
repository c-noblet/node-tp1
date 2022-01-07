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

    const data = [];
    for (let i = 1; i < 5; i++) {
      data.push({
        id: uuidv4(),
        firstname: `firstname-${i}`,
        lastname: `lastname-${i}`,
        email: `user-${i}@mail.com`,
        username: `username-${i}`,
        github: `https://github.com/user-${i}`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
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
