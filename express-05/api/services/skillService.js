import { models } from "../config";

const { Skill } = models;

export const getSkillsByProfile = (profile_id) =>
  Skill.findAll({
    where: { profile_id },
    order: [
      ["category", "ASC"],
      ["name", "ASC"],
    ],
  });

export const getSkillById = (id) => Skill.findByPk(id);

export const createSkill = (data) => Skill.create(data);

export const updateSkill = (id, data) =>
  Skill.update(data, { where: { id }, returning: true }).then(
    ([, [updated]]) => updated,
  );

export const deleteSkill = (id) => Skill.destroy({ where: { id } });
