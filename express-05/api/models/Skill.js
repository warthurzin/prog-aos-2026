export const getSkillModel = (sequelize, Sequelize) => {
  const Skill = sequelize.define(
    "Skill",
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
      name: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      category: {
        type: Sequelize.DataTypes.ENUM(
          "tecnica",
          "comportamental",
          "idioma",
          "ferramenta",
          "outro",
        ),
        defaultValue: "tecnica",
      },
      level: {
        type: Sequelize.DataTypes.ENUM(
          "iniciante",
          "intermediario",
          "avancado",
          "especialista",
        ),
        allowNull: true,
      },
    },
    {
      tableName: "skills",
      timestamps: true,
      underscored: true,
    },
  );

  Skill.associate = (models) => {
    Skill.belongsTo(models.Profile, {
      foreignKey: "profile_id",
      as: "profile",
    });
  };

  return Skill;
};
