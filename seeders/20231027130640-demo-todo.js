'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos', [
      {
        name: 'Dono',
        todo: 'Boxing',
        address: 'America',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ucup',
        todo: 'Kung fu',
        address: 'China',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jarwo',
        todo: 'Coding',
        address: 'India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Suherman',
        todo: 'Badminton',
        address: 'Jepang',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {})
  }
}
