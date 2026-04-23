import { models } from "../config";

const { Education } = models;

export const getEducationsByProfile = (profile_id) =>
  Education.findAll({ where: { profile_id }, order: [["start_date", "DESC"]] });

export const getEducationById = (id) => Education.findByPk(id);

export const createEducation = (data) => Education.create(data);

export const updateEducation = (id, data) =>
  Education.update(data, { where: { id }, returning: true }).then(
    ([, [updated]]) => updated,
  );

export const deleteEducation = (id) => Education.destroy({ where: { id } });
