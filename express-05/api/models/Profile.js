export const getProfileModel = (sequelize, Sequelize) => {
  const Profile = sequelize.define(
    "Profile",
    {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
      },
      title: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
      },
      summary: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      avatar_url: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: true,
      },
      location: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING(150),
        allowNull: false,
        unique: true,
      },
      phone: {
        type: Sequelize.DataTypes.STRING(30),
        allowNull: true,
      },
    },
    {
      tableName: "profiles",
      timestamps: true,
      underscored: true,
    },
  );

  Profile.associate = (models) => {
    Profile.hasMany(models.Experience, {
      foreignKey: "profile_id",
      as: "experiences",
      onDelete: "CASCADE",
      hooks: true,
    });
    Profile.hasMany(models.Education, {
      foreignKey: "profile_id",
      as: "educations",
      onDelete: "CASCADE",
      hooks: true,
    });
    Profile.hasMany(models.Skill, {
      foreignKey: "profile_id",
      as: "skills",
      onDelete: "CASCADE",
      hooks: true,
    });
    Profile.hasMany(models.Project, {
      foreignKey: "profile_id",
      as: "projects",
      onDelete: "CASCADE",
      hooks: true,
    });
    Profile.hasMany(models.Contact, {
      foreignKey: "profile_id",
      as: "contacts",
      onDelete: "CASCADE",
      hooks: true,
    });
  };

  return Profile;
};
