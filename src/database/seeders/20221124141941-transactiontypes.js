const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Enumerations', [
    {
      id: uuidv4(),
      key: 'Gender',
      description: 'MALE',
      value: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: uuidv4(),
      key: 'Gender',
      description: 'Female',
      value: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),

  down: (queryInterface) => queryInterface.bulkDelete('Enumerations', null, {}),
};
