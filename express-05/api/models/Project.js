export const getProjectModel = (sequelize, Sequelize) => {
  const Project = sequelize.define(
    "Project",
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
      title: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
      },
      description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      tech_stack: {
        type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
        defaultValue: [],
      },
      repo_url: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: true,
      },
      live_url: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: true,
      },
      thumbnail_url: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: true,
      },
      is_featured: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "projects",
      timestamps: true,
      underscored: true,
    },
  );

  Project.associate = (models) => {
    Project.belongsTo(models.Profile, {
      foreignKey: "profile_id",
      as: "profile",
    });
  };

  return Project;
};
