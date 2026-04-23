export const getContactModel = (sequelize, Sequelize) => {
  const Contact = sequelize.define(
    "Contact",
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
      type: {
        type: Sequelize.DataTypes.ENUM(
          "linkedin",
          "github",
          "twitter",
          "instagram",
          "website",
          "youtube",
          "outro",
        ),
        allowNull: false,
      },
      label: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: true,
      },
      url: {
        type: Sequelize.DataTypes.STRING(500),
        allowNull: false,
      },
    },
    {
      tableName: "contacts",
      timestamps: true,
      underscored: true,
    },
  );

  Contact.associate = (models) => {
    Contact.belongsTo(models.Profile, {
      foreignKey: "profile_id",
      as: "profile",
    });
  };

  return Contact;
};
