module.exports = (sequelize, DataTypes) => {
  const Enumeration = sequelize.define(
    'Enumeration',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      key: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clusteredId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {},
  );
    // eslint-disable-next-line func-names
  Enumeration.associate = function () {
    // associations can be defined here
  };
  return Enumeration;
};
