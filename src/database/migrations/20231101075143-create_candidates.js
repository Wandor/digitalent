module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Candidates', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    gender: Sequelize.INTEGER,
    town: { type: Sequelize.STRING },
    /* Add a clusteredId column for indexing */
    clusteredId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Candidates'),
};
