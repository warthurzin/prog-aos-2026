import { Sequelize } from "sequelize";
import { getProfileModel } from "../models/Profile";
import { getExperienceModel } from "../models/Experience";
import { getEducationModel } from "../models/Education";
import { getSkillModel } from "../models/Skill";
import { getProjectModel } from "../models/Project";
import { getContactModel } from "../models/Contact";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  dialectModule: require("pg"),
  logging: false,
});

const models = {
  Profile: getProfileModel(sequelize, Sequelize),
  Experience: getExperienceModel(sequelize, Sequelize),
  Education: getEducationModel(sequelize, Sequelize),
  Skill: getSkillModel(sequelize, Sequelize),
  Project: getProjectModel(sequelize, Sequelize),
  Contact: getContactModel(sequelize, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize, models };
