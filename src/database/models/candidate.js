module.exports = (sequelize, DataTypes) => {
  const BilledAlert = sequelize.define(
    'BilledAlert',
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender: DataTypes.INTEGER,
      town: { type: DataTypes.STRING },
      /* Add a clusteredId column for indexing */
      clusteredId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {},
  );
    // eslint-disable-next-line func-names
  BilledAlert.associate = function () {
    // associations can be defined here
    // BilledAlert.belongsTo(models.Company, {
    //   foreignKey: 'companyId',
    //   as: 'companyAlerts',
    // });
  };
  return BilledAlert;
};
