import { models } from "../config";

const { Experience } = models;

export const getExperiencesByProfile = (profile_id) =>
  Experience.findAll({
    where: { profile_id },
    order: [["start_date", "DESC"]],
  });

export const getExperienceById = (id) => Experience.findByPk(id);

export const createExperience = (data) => Experience.create(data);

export const updateExperience = (id, data) =>
  Experience.update(data, { where: { id }, returning: true }).then(
    ([, [updated]]) => updated,
  );

export const deleteExperience = (id) => Experience.destroy({ where: { id } });
