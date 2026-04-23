export const getExperienceModel = (sequelize, Sequelize) => {
  const Experience = sequelize.define(
    "Experience",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      profile_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "profiles",
          key: "id",
        },
      },
      company: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
      },
      role: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      start_date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: true,
      },
      is_current: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
      },
      location: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: true,
      },
    },
    {
      tableName: "experiences",
      timestamps: true,
      underscored: true,
    },
  );

  Experience.associate = (models) => {
    Experience.belongsTo(models.Profile, {
      foreignKey: "profile_id",
      as: "profile",
    });
  };

  return Experience;
};
