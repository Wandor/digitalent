module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Enumerations', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    key: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    value: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    description: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    clusteredId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Enumerations'),
};
