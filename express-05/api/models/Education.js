export const getEducationModel = (sequelize, Sequelize) => {
  const Education = sequelize.define(
    "Education",
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
      institution: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      degree: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
      },
      field_of_study: {
        type: Sequelize.DataTypes.STRING(150),
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
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: "educations",
      timestamps: true,
      underscored: true,
    },
  );

  Education.associate = (models) => {
    Education.belongsTo(models.Profile, {
      foreignKey: "profile_id",
      as: "profile",
    });
  };

  return Education;
};
